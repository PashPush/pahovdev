import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostman,
  SiGraphql,
  SiFigma,
  SiStorybook,
  SiJest,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiWebpack,
  SiDocker,
  SiSass,
} from 'react-icons/si';
import { FaCode, FaServer } from 'react-icons/fa';

type Skill = {
  id: string;
  name: string;
  Icon: IconType;
  color: string;
  colorBack?: string;
};

const frontend: Skill[] = [
  { id: 'react', name: 'React', Icon: SiReact, color: '#61dafb', colorBack: '#4a8392' },
  { id: 'typescript', name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', colorBack: '#1b3d6d' },
  { id: 'javascript', name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e', colorBack: '#c2a902' },
  { id: 'html', name: 'HTML', Icon: SiHtml5, color: '#e34f26', colorBack: '#a63416' },
  { id: 'css', name: 'CSS', Icon: SiCss3, color: '#264de4', colorBack: '#182d8a' },
  { id: 'tailwind', name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8', colorBack: '#20748f' },
  { id: 'scss', name: 'SCSS', Icon: SiSass, color: '#cc6699', colorBack: '#8b3b62' },
  { id: 'redux', name: 'Redux', Icon: SiRedux, color: '#764abc', colorBack: '#442674' },
  { id: 'zustand', name: 'Zustand', Icon: FaServer, color: '#7e57c2', colorBack: '#483071' },
  { id: 'react-native', name: 'React Native', Icon: SiReact, color: '#00bcd4', colorBack: '#007888' },
];

const backendAndTools: Skill[] = [
  { id: 'next', name: 'Next.js', Icon: SiNextdotjs, color: '#000000', colorBack: '#3a3a3a' },
  { id: 'webpack', name: 'Webpack', Icon: SiWebpack, color: '#8ed6fb', colorBack: '#4c9ac7' },
  { id: 'rest', name: 'REST API', Icon: SiPostman, color: '#FF6C37', colorBack: '#b9471b' },
  { id: 'graphql', name: 'GraphQL', Icon: SiGraphql, color: '#e10098', colorBack: '#8a0059' },
  { id: 'docker', name: 'Docker', Icon: SiDocker, color: '#2496ed', colorBack: '#165b8a' },
  { id: 'ci', name: 'CI/CD', Icon: FaCode, color: '#ff8a00', colorBack: '#b45c00' }, // fallback icon
];

const testing: Skill[] = [
  { id: 'jest', name: 'Jest', Icon: SiJest, color: '#99424f', colorBack: '#5d2830' },
  { id: 'playwright', name: 'Playwright', Icon: FaCode, color: '#1f8ceb', colorBack: '#14518d' }, // fallback
  { id: 'storybook', name: 'Storybook', Icon: SiStorybook, color: '#ff4785', colorBack: '#b0305d' },
  { id: 'figma', name: 'Figma', Icon: SiFigma, color: '#ec87a9', colorBack: '#b9587b' },
];

function SkillBadge({ skill }: { skill: Skill }) {
  const { Icon } = skill;
  return (
    <div
      className="skill-badge"
      style={{ background: skill.colorBack ? skill.colorBack : skill.color, width: 'fit-content' }}
      role="listitem"
      aria-label={skill.name}
    >
      <span style={{ background: skill.color }} className="skill-icon">
        <Icon size={40} style={{ color: '#fff', minWidth: 40 }} />
      </span>
      <span className="text-white text-base font-medium" style={{ lineHeight: 1 }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function First() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg text-white mb-4">Frontend Core</h3>
          <div className="skill-list" role="list">
            {frontend.map(s => (
              <SkillBadge key={s.id} skill={s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg text-white mb-4">Backend & Tools</h3>
          <div className="skill-list" role="list">
            {backendAndTools.map(s => (
              <SkillBadge key={s.id} skill={s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg text-white mb-4">Testing & Component / QA</h3>
          <div className="skill-list" role="list">
            {testing.map(s => (
              <SkillBadge key={s.id} skill={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
