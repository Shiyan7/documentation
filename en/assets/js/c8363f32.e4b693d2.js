"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5701],{2924:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var i=t(7462),o=t(3366),s=(t(7294),t(4137)),r=t(6889),a={sidebar_position:2},l="Desegemented",d={unversionedId:"guides/handbook/desegmented",id:"guides/handbook/desegmented",isDocsHomePage:!1,title:"Desegemented",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/handbook/desegmented.mdx",sourceDirName:"guides/handbook",slug:"/guides/handbook/desegmented",permalink:"/en/docs/guides/handbook/desegmented",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/handbook/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1630805034,formattedLastUpdatedAt:"9/5/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cross-imports",permalink:"/en/docs/guides/handbook/cross-imports"},next:{title:"Routing",permalink:"/en/docs/guides/handbook/routes"}},c=[{value:"Situation",id:"situation",children:[]},{value:"Problem",id:"problem",children:[]},{value:"If you ignore it",id:"if-you-ignore-it",children:[]},{value:"Solution",id:"solution",children:[]},{value:"See also",id:"see-also",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"desegemented"},"Desegemented"),(0,s.kt)(r.ZP,{ticket:"148",mdxType:"WIP"}),(0,s.kt)("h2",{id:"situation"},"Situation"),(0,s.kt)("p",null,"Very often, there is a situation on projects when modules related to a specific domain from the subject area are unnecessarily desegmented and scattered around the project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n")),(0,s.kt)("h2",{id:"problem"},"Problem"),(0,s.kt)("p",null,"The problem manifests itself at least in violation of the principle of * ",(0,s.kt)("em",{parentName:"p"}," High Cohesion** and excessive stretching ")," * of the axis of changes**"),(0,s.kt)("h2",{id:"if-you-ignore-it"},"If you ignore it"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If necessary, touch on the logic, for example, delivery - we will have to keep in mind that it lies in several places and touch on several places in the code-which unnecessarily stretches our * * Axis of changes**"),(0,s.kt)("li",{parentName:"ul"},"If we need to study the logic of the user, we will have to go through the whole project to study in detail * * actions, epics, constants, entities, components** - instead of it lying in one place"),(0,s.kt)("li",{parentName:"ul"},"Implicit connections and the uncontrollability of a growing subject area"),(0,s.kt)("li",{parentName:"ul"},'With this approach, the eye is very often blurred and you may not notice how we "create constants for the sake of constants", creating a dump in the corresponding project directory')),(0,s.kt)("h2",{id:"solution"},"Solution"),(0,s.kt)("p",null,"Place all modules related to a specific domain/user case - directly next to each other"),(0,s.kt)("p",null,"So that when studying a particular module, all its components lie side by side, and are not scattered around the project"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"It also increases the discoverability and clarity of the code base and the relationships between modules")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"},"(Article) About Low Coupling and High Cohesion clearly")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9"},"(Article) Low Coupling and High Cohesion. The Law of Demeter"))))}p.isMDXComponent=!0}}]);