import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { contactInfo } from '../../config/contact';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
} as const;

type SocialLinkProps = {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
};

export const SocialLinks: React.FC<SocialLinkProps> = ({
  className = '',
  iconSize = 24,
  showLabels = false,
}) => {
  const { socialMedia } = contactInfo;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {Object.entries(socialMedia).map(([platform, url]) => {
        const Icon = socialIcons[platform as keyof typeof socialIcons];
        const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
        
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label={`Visit my ${platformName} profile`}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="text-sm">{platformName}</span>}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
