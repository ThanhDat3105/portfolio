import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../../contexts/MyContext";
import { companies, Company, Project } from "../../../data/companies";

export default function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const { setRefPortfolio } = useContext(MyContext);

  useEffect(() => {
    if (setRefPortfolio) {
      setRefPortfolio(portfolioRef);
    }
  }, [setRefPortfolio]);

  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const date = new Date(dateStr + "-01");
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getDateRange = (startDate: string, endDate: string) => {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const CompanyLogo = ({ company }: { company: Company }) => {
    return (
      <div className="company_logo w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
        {/* Placeholder for company logo - using company initial */}
        <span className="text-2xl font-bold text-gray-600">
          {company.name.charAt(0)}
        </span>
      </div>
    );
  };

  const ProjectItem = ({ project }: { project: Project }) => {
    return (
      <div className="project_item bg-gray-800 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
        <div className="technologies flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-[#ff014f] text-white px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.url && (
          <a 
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#ff014f] hover:text-[#ff014f]/80 text-sm font-medium transition-colors duration-300"
          >
            View Project →
          </a>
        )}
      </div>
    );
  };

  const CompanyItem = ({ company }: { company: Company }) => {
    return (
      <div className="company_item bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8">
        <div className="company_header flex flex-col sm:flex-row items-start gap-4 mb-4">
          <CompanyLogo company={company} />
          <div className="company_info flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{company.name}</h3>
            <p className="text-[#ff014f] text-base md:text-lg font-semibold mb-1">{company.role}</p>
            <p className="text-gray-300 text-sm">
              {getDateRange(company.startDate, company.endDate)}
            </p>
          </div>
        </div>
        
        <div className="company_description mb-6">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{company.description}</p>
        </div>

        <div className="company_projects">
          <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Key Projects</h4>
          <div className="projects_grid grid grid-cols-1 lg:grid-cols-2 gap-4">
            {company.projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={portfolioRef} className="portfolio pt-60">
      <div className="container_all">
        <h1 className="portfolio_title text-3xl md:text-5xl font-semibold text-white pb-12 md:pb-20 text-center">
          Work <span className="text-[#ff014f]">Experience</span>
        </h1>
        <div className="content_portfolio">
          {companies.map((company) => (
            <CompanyItem key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}