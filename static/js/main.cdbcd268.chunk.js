(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),l=n(8),i=n.n(l),c=n(2),r=n(3),o=n(5),h=n(4),u=n(6),j=n(0),b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:"",name:"Name and Surname",nameEdit:!1,title:"Work Title",titleEdit:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleFocus",value:function(e){"name"===e?this.setState({titleEdit:!1,nameEdit:!0,value:this.state.name}):this.setState({nameEdit:!1,titleEdit:!0,value:this.state.title})}},{key:"handleBlur",value:function(e){"name"===e?""===this.state.value?this.setState({name:"Name and Surname",nameEdit:!1,value:""}):this.setState({name:this.state.value,nameEdit:!1,value:""}):""===this.state.value?this.setState({title:"Work Title",titleEdit:!1,value:""}):this.setState({title:this.state.value,titleEdit:!1,value:""})}},{key:"render",value:function(){var e,t,n=this,a=this.state,s=a.value,l=a.name,i=a.nameEdit,c=a.title,r=a.titleEdit;return e=!0===i?Object(j.jsx)("input",{id:"h1",autoFocus:!0,placeholder:l,type:"text",value:s,onBlur:function(e){return n.handleBlur("name",e)},onChange:this.handleChange}):Object(j.jsx)("h1",{onClick:function(){return n.handleFocus("name")},children:l}),t=!0===r?Object(j.jsx)("input",{id:"h2",autoFocus:!0,placeholder:l,type:"text",value:s,onBlur:function(e){return n.handleBlur("title",e)},onChange:this.handleChange}):Object(j.jsx)("h2",{onClick:function(){return n.handleFocus("title")},children:c}),Object(j.jsxs)("header",{children:[e,t]})}}]),n}(s.a.Component),d=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={array:[],value:"",visible:!1,buttonValue:"+"},a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClick",value:function(){!0===this.state.visible?this.setState({visible:!1,value:"",buttonValue:"+"}):this.setState({visible:!0,buttonValue:"x"})}},{key:"handleSubmit",value:function(e){"Enter"===e.key&&(""===this.state.value?this.setState({visible:!1,buttonValue:"+"}):this.setState({array:this.state.array.concat(this.state.value),visible:!1,value:"",buttonValue:"+"}))}},{key:"handleDelete",value:function(e){this.state.array.splice(parseInt(e.target.id),1),this.setState({array:this.state.array})}},{key:"render",value:function(){var e=this,t=this.state,n=t.array,a=(t.value,t.visible),s=t.buttonValue;return 0===n.length?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"personal-header",children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)("button",{onClick:function(){return e.handleClick()},className:"functional-button",children:s})]}),a?Object(j.jsx)("input",{placeholder:"Press Enter to Add",onChange:function(t){return e.handleChange(t)},autoFocus:!0,onKeyPress:function(t){return e.handleSubmit(t)}}):null]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"personal-header",children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)("button",{onClick:function(){return e.handleClick()},className:"functional-button",children:"+"})]}),a?Object(j.jsx)("input",{placeholder:"Press Enter to Add",onChange:function(t){return e.handleChange(t)},autoFocus:!0,onKeyPress:function(t){return e.handleSubmit(t)}}):null,Object(j.jsx)("ul",{children:n.map((function(t,n){return Object(j.jsxs)("li",{children:[t,Object(j.jsx)("button",{className:"functional-button small",onClick:function(t){return e.handleDelete(t)},children:Object(j.jsx)("i",{id:n,className:"fas fa-trash"})})]},n)}))})]})}}]),n}(s.a.Component),O=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"personal",children:[Object(j.jsx)(d,{name:"Personal Info"}),Object(j.jsx)(d,{name:"Skills"}),Object(j.jsx)(d,{name:"Languages"}),Object(j.jsx)(d,{name:"Main Interests"})]})}}]),n}(s.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.submit("work")}},{key:"handleChange",value:function(e,t){this.props.change(e.target.value,t,"work")}},{key:"render",value:function(){var e=this,t=this.props.workValues;return Object(j.jsx)("div",{id:"work-form",children:Object(j.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"Work Title:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[0],onChange:function(t){return e.handleChange(t,0)}})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"Company: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[1],onChange:function(t){return e.handleChange(t,1)}})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"Location: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[2],onChange:function(t){return e.handleChange(t,2)}})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"Since:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[3],onChange:function(t){return e.handleChange(t,3)},placeholder:"MM.YYYY"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"To:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[4],onChange:function(t){return e.handleChange(t,4)},placeholder:"MMM.YYYY or Present"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("label",{children:"Description:"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{value:t[5],onChange:function(t){return e.handleChange(t,5)}})]}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"submit",children:"Add"})})]})})})}}]),n}(s.a.Component),p=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.submit("school")}},{key:"handleChange",value:function(e,t){this.props.change(e.target.value,t,"school")}},{key:"render",value:function(){var e=this,t=this.props.schoolValues;return Object(j.jsx)("div",{id:"school-form",children:Object(j.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("label",{children:"Collage Name:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[0],onChange:function(t){return e.handleChange(t,0)}})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("label",{children:"Degree: "}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[1],onChange:function(t){return e.handleChange(t,1)}})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("label",{children:"Since:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[2],onChange:function(t){return e.handleChange(t,2)},placeholder:"MM.YYYY"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("label",{children:"To:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:t[3],onChange:function(t){return e.handleChange(t,3)},placeholder:"MMM.YYYY or Present"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("button",{children:"Add"})})]})})}}]),n}(s.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"handleDelete",value:function(e,t){this.props.delete(e.target.value,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.array;return"work"===t.category?Object(j.jsx)("div",{id:"work_exp-list",children:n.map((function(t,n){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:t[0]}),Object(j.jsxs)("p",{children:[t[1],", ",t[2]," | ",t[3]," - ",t[4]]}),Object(j.jsx)("p",{children:t[5]}),Object(j.jsx)("button",{value:n,onClick:function(t){return e.handleDelete(t,"work")},children:"Delete"})]},"w"+n)}))}):Object(j.jsx)("div",{id:"school_exp-list",children:n.map((function(t,n){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:t[0]}),Object(j.jsxs)("p",{children:[t[1]," | ",t[2]," - ",t[3]]}),Object(j.jsx)("button",{value:n,onClick:function(t){return e.handleDelete(t,"school")},children:"Delete"})]},"s"+n)}))})}}]),n}(s.a.Component),m=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={workFormVisible:!1,workFormOpenBttn:"+",workValues:["","","","","",""],workData:[],schoolFormVisible:!1,schoolFormOpenBttn:"+",schoolValues:["","","",""],schoolData:[]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"handleSubmit",value:function(e){if("work"===e){var t=Object.assign({},this.state.workValues);this.setState({workData:this.state.workData.concat(t)})}else{var n=Object.assign({},this.state.schoolValues);this.setState({schoolData:this.state.schoolData.concat(n)})}this.closeWorkForm(),this.closeSchoolForm(),this.clearValues()}},{key:"handleChange",value:function(e,t,n){if("work"===n){var a=this.state.workValues;a[t]=e,this.setState({workValues:a})}else{var s=this.state.schoolValues;s[t]=e,this.setState({shoolValues:s})}}},{key:"handleVisibility",value:function(e){"work"===e?!1===this.state.workFormVisible?(this.openWorkForm(),this.closeSchoolForm()):(this.closeWorkForm(),this.closeSchoolForm()):(!1===this.state.schoolFormVisible?(this.openSchoolForm(),this.closeWorkForm()):(this.closeSchoolForm(),this.closeWorkForm()),this.clearValues())}},{key:"handleDelete",value:function(e,t){console.log(e),console.log(t),"work"===t?(this.state.workData.splice(parseInt(e),1),this.setState({workData:this.state.workData})):(this.state.schoolData.splice(parseInt(e),1),this.setState({schoolData:this.state.schoolData}))}},{key:"openWorkForm",value:function(){this.setState({workFormVisible:!0,workFormOpenBttn:"x"})}},{key:"closeWorkForm",value:function(){this.setState({workFormVisible:!1,workFormOpenBttn:"+"})}},{key:"openSchoolForm",value:function(){this.setState({schoolFormVisible:!0,schoolFormOpenBttn:"x"})}},{key:"closeSchoolForm",value:function(){this.setState({schoolFormVisible:!1,schoolFormOpenBttn:"+"})}},{key:"clearValues",value:function(){this.setState({workValues:["","","","","",""],schoolValues:["","","",""]})}},{key:"render",value:function(){var e=this,t=this.state,n=t.workFormVisible,a=t.workFormOpenBttn,s=t.workValues,l=t.workData,i=t.schoolFormVisible,c=t.schoolFormOpenBttn,r=t.schoolValues,o=t.schoolData;return Object(j.jsxs)("div",{id:"exp",children:[Object(j.jsxs)("div",{className:"personal-header",children:[Object(j.jsx)("h2",{children:"Work Experience"}),Object(j.jsx)("button",{className:"functional-button darker",onClick:function(){return e.handleVisibility("work")},children:a})]}),n?Object(j.jsx)(x,{change:this.handleChange,submit:this.handleSubmit,workValues:s}):null,Object(j.jsx)(v,{array:l,delete:this.handleDelete,category:"work"}),Object(j.jsxs)("div",{className:"personal-header",children:[Object(j.jsx)("h2",{children:"Academic Background"}),Object(j.jsx)("button",{className:"functional-button darker",onClick:function(){return e.handleVisibility("school")},children:c})]}),i?Object(j.jsx)(p,{change:this.handleChange,schoolValues:r}):null,Object(j.jsx)(v,{array:o,delete:this.handleDelete,category:"school"})]})}}]),n}(s.a.Component),k=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{id:"container",children:[Object(j.jsx)(O,{}),Object(j.jsx)(m,{})]})]})}}]),n}(s.a.Component);n(14),n(15);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cdbcd268.chunk.js.map