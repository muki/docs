(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{281:function(e,t,i){"use strict";i.r(t);var o=i(29),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"publishing-to-skill-store"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#publishing-to-skill-store"}},[e._v("#")]),e._v(" Publishing to skill store")]),e._v(" "),i("p",[e._v("So you think your freshly written skill is ready to be shared with the rest of the world? That's great! Here are the steps to have your skill published, from checking that everything is ok to have it published, let's review the remaining steps")]),e._v(" "),i("h2",{attrs:{id:"checking-your-skill"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#checking-your-skill"}},[e._v("#")]),e._v(" Checking your skill")]),e._v(" "),i("p",[e._v("Because we like things clean and following a strict guideline!")]),e._v(" "),i("h3",{attrs:{id:"code-guideline"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-guideline"}},[e._v("#")]),e._v(" Code guideline")]),e._v(" "),i("p",[e._v("Very first step, to make sure the demon Psycho doesn't eat you alive, you want to check your syntax and code formatting. Are they following our "),i("a",{attrs:{href:"../contribute/code-guidelines"}},[e._v("code guidelines")]),e._v("? Did you indent your code with tabs and "),i("strong",[e._v("not 4 spaces")]),e._v("? Did you strong type your methods, adding variable type hints and return type hint? Your methods names are following camelCase and so do your variables? Check the guidelines and you'll be all set!")]),e._v(" "),i("h3",{attrs:{id:"skill-validation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#skill-validation"}},[e._v("#")]),e._v(" Skill validation")]),e._v(" "),i("p",[e._v("Then we want to make sure your skill is operational and clean. For that, your need a handy tool that we provide, called "),i("strong",[e._v("projectalice-sk")]),e._v(". Let's first install it:")]),e._v(" "),i("p",[i("code",[e._v("pip3 install projectalice-sk")])]),e._v(" "),i("p",[e._v("Navigate to the parent directory where you have your skill. If we continue our "),i("em",[e._v("HelloWorld")]),e._v(" example:")]),e._v(" "),i("p",[i("code",[e._v("cd ~/ProjectAlice/skills")])]),e._v(" "),i("p",[e._v("And start the check!")]),e._v(" "),i("p",[i("code",[e._v("projectalice-sk validate --paths HelloWorld")])]),e._v(" "),i("p",[e._v("This will output a few things while checking your talk files, your dialog templates, your install file and others. If everything comes out clean it will tell you the skill is "),i("strong",[e._v("valid")]),e._v(". Keep in mind it still doesn't mean it is "),i("strong",[e._v("working")]),e._v(" but at least it won't crash Alice's start if deployed on an existing assistant. Great")]),e._v(" "),i("h2",{attrs:{id:"publishing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[e._v("#")]),e._v(" Publishing")]),e._v(" "),i("p",[e._v("As of now, I'm still thinking on how people are going to publish their skills to our store. I want to keep an eye on the proposed skills and make sure it's not malicious code and that it is of quality. I'm a real pain, I can tell you, but that's only for the good of the many. Knowing this, you understand that the publishing is made exclusively by the Project Alice team, after some checking and deployments on our side, in fact, we have several things to do to make your skill available.")]),e._v(" "),i("p",[e._v("What you want to do though, is "),i("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSkills/issues/new?assignees=Psychokiller1888&labels=Skill+publish+request&template=skill-publishing.md&title=%5BNew+skill%5D",target:"_blank",rel:"noopener noreferrer"}},[e._v("propose your skill for the store"),i("OutboundLink")],1)]),e._v(" "),i("h2",{attrs:{id:"after-publishing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#after-publishing"}},[e._v("#")]),e._v(" After publishing")]),e._v(" "),i("p",[e._v("Once we get your request, we'll fork your repository into Project Alice organisation, review your skill and make sure everything's ok. If there's something not ok, we'll let you know. Once we have forked your skill, you'll need to open Pull Requests onto it to keep it updated!")]),e._v(" "),i("p",[e._v("Once we have forked it and added it to our quality and store control Continuous integration, you can check it's status by going to:")]),e._v(" "),i("p",[i("code",[e._v("https://projectalice.io/skill_YOUR_SKILL_NAME")])]),e._v(" "),i("p",[e._v('On top of the readme, you will find a badge called "pipeline":')]),e._v(" "),i("p",[e._v("![/images/pipeline_badge.png][/images/pipeline_badge.png]")]),e._v(" "),i("p",[e._v('That badge should say "passed". In case not, something went wrong publishing the skill. Simply click on the badge to be redirected to gitlab where you will be able to understand what failed. We have 5 jobs that run before a skill is available and you can influience the 3 first ones, because they test your code:')]),e._v(" "),i("p",[e._v("![/images/pipeline_example.png][/images/pipeline_example.png]")]),e._v(" "),i("p",[e._v("The last one, the sonarcube check won't stop a deployment but reflects the quality of your code. It is allowed to fail. The first 2 jobs though cannot fail or your skill won't get published. If either one of them or both failed, click on their icons to navigate to the test and a report of what failed. You'll need to correct those and submit pull requests to fix the issues. It is also a good idea to subscribe to the repository on Gitlab so you get email alerted if a job fails for your skill.")])])}),[],!1,null,null,null);t.default=s.exports}}]);