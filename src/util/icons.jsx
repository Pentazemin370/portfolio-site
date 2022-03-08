//A little helper for creating icon links for "devicons."

import React from 'react';

import AngularIcon from '../assets/devicons/angularjs-original.svg';
import BootstrapIcon from '../assets/devicons/bootstrap-original.svg';
import ChromeIcon from '../assets/devicons/chrome-original.svg';
import CssIcon from '../assets/devicons/css3-original.svg';
import GithubIcon from '../assets/devicons/github-original.svg';
import GitlabIcon from '../assets/devicons/gitlab-original.svg';
import HtmlIcon from '../assets/devicons/html5-original.svg';
import IonicIcon from '../assets/devicons/ionic-original.svg';
import JavaIcon from '../assets/devicons/java-original.svg';
import JavascriptIcon from '../assets/devicons/javascript-original.svg';
import JenkinsIcon from '../assets/devicons/jenkins-original.svg';
import LinkedinIcon from '../assets/devicons/linkedin-original.svg';
import ReactIcon from '../assets/devicons/react-original.svg';
import ReduxIcon from '../assets/devicons/redux-original.svg';
import SassIcon from '../assets/devicons/sass-original.svg';
import SpringIcon from '../assets/devicons/spring-original.svg';
import StorybookIcon from '../assets/devicons/storybook-original.svg';
import TypescriptIcon from '../assets/devicons/typescript-original.svg';
import WebpackIcon from '../assets/devicons/webpack-original.svg';

let id = 0;

const createIcon = (svg,title,href) =>{
    if(href){
        return <a key={`devicon_${id++}`} className="devicon-link" href={href} title={title}>{svg}</a>;
    }
    return <span key={`devicon_${id++}`} className="devicon-link" title={title}>{svg}</span>;
}


export const angularIcon = createIcon(<AngularIcon/>,'Angular','https://angular.io/');
export const bootstrapIcon = createIcon(<BootstrapIcon/>, 'Bootstrap','https://getbootstrap.com/');
export const chromeIcon = createIcon(<ChromeIcon/>,'Chrome API','https://developer.chrome.com/docs/extensions/reference/');
export const cssIcon = createIcon(<CssIcon/>,'CSS3','https://developer.mozilla.org/en-US/docs/Web/CSS');
export const githubIcon = createIcon(<GithubIcon fill={'white'}/>,'Github','');
export const gitlabIcon = createIcon(<GitlabIcon/>,'Gitlab','https://about.gitlab.com/');
export const htmlIcon = createIcon(<HtmlIcon/>,'HTML5', 'https://developer.mozilla.org/en-US/docs/Web/HTML');
export const ionicIcon = createIcon(<IonicIcon/>,'Ionic','https://ionicframework.com/');
export const javaIcon = createIcon(<JavaIcon/>,'Java','https://www.oracle.com/java/');
export const jenkinsIcon = createIcon(<JenkinsIcon/>,'Jenkins','https://www.jenkins.io/');
export const jsIcon = createIcon(<JavascriptIcon/>,'Javascript','https://www.javascript.com/');
export const linkedinIcon = createIcon(<LinkedinIcon/>,'Linkedin');
export const reactIcon = createIcon(<ReactIcon/>,'React','https://reactjs.org/');
export const reduxIcon = createIcon(<ReduxIcon/>,'Redux','https://redux.js.org/');
export const sassIcon = createIcon(<SassIcon/>,'Sass','https://sass-lang.com/');
export const springIcon = createIcon(<SpringIcon/>,'Spring','https://spring.io/');
export const storybookIcon = createIcon(<StorybookIcon/>,'Storybook','https://storybook.js.org/');
export const tsIcon = createIcon(<TypescriptIcon/>,'Typescript','https://www.typescriptlang.org/');
export const webpackIcon = createIcon(<WebpackIcon/>,'Webpack','https://webpack.js.org/');
