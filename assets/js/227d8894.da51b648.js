"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9573],{2995:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=i(7462),u=i(3366),s=(i(7294),i(4137)),o=i(6889),r={sidebar_position:6},a="Decouple entities",l={unversionedId:"guides/decouple-entities",id:"guides/decouple-entities",isDocsHomePage:!1,title:"Decouple entities",description:"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/decouple-entities.mdx",sourceDirName:"guides",slug:"/guides/decouple-entities",permalink:"/docs/guides/decouple-entities",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/guides/decouple-entities.mdx",tags:[],version:"current",lastUpdatedAt:1630805034,formattedLastUpdatedAt:"05.09.2021",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Low Coupling & High Cohesion",permalink:"/docs/guides/low-coupling"},next:{title:"White Labels",permalink:"/docs/guides/white-labels"}},d=[{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[]}],c={toc:d};function p(e){var t=e.components,i=(0,u.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"decouple-entities"},"Decouple entities"),(0,s.kt)(o.ZP,{ticket:"202",mdxType:"WIP"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e \u043c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 absolutely-decoupled entities")),(0,s.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3633"},"(\u0422\u0440\u0435\u0434) \u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u0440\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043f\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3316"},'(\u0422\u0440\u0435\u0434) \u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0434\u043b\u044f "\u0441\u0432\u044f\u0437\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439" (users/pets/friends)')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4276"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432/\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0432 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u0445")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4521"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0444\u0438\u0447"))))}p.isMDXComponent=!0}}]);