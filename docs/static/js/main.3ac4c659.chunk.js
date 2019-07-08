(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(7),i=a(9),s=a(8),r=a(10),o=a(0),c=a(20),u=a(11),d=a(23),m=a(1),h=function(e){return o.createElement("div",{className:"selected"},o.createElement("p",null,o.createElement("i",null,"The ",e.selecting," ",o.createElement("b",null,e.selected)," has been selected")),o.createElement(m.Button,{onClick:e.onClear,style:{visibility:e.nextConfig?"hidden":"visible",marginLeft:"12px"}},"Clear"))};h.displayName="Selected";var f=function(e){var t={className:"dropdown-select",disabled:!e.enabled,kind:"line",onChange:e.onChange,onSelect:e.onChange,value:e.selected},a={disabled:!e.enabled||""===e.selected,kind:"filledGreen",onClick:e.onClick,style:{marginLeft:"12px"}};return o.createElement("div",{className:"selector"},o.createElement(m.DropdownSelect,t,e.list.map(function(e){return o.createElement("option",{key:e},e)})),o.createElement(m.Button,a,"Set"))};f.displayName="Selector";var g,p=function(e){return o.createElement(o.Fragment,null,o.createElement("span",null,"Select a ",e.selecting),function(e){var t=e.config,a=e.enabled,n=e.list,l=e.nextConfig,i=e.onChange,s=e.onClear,r=e.onClick,c=e.selected,u=e.selecting;return t?o.createElement(h,{nextConfig:l,onClear:s,selected:c,selecting:u}):o.createElement(f,{enabled:a,list:n,onChange:i,onClick:r,selected:c})}(e))};p.displayName="Setting";var b,w,y="Loading...",v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={autoUpdate:!1,bg:"#ffffff",configured:!1,dataType:"string",delimiter:"|",field:"",field_config:!1,field_enabled:!1,field_list:[],ignoreSelection:!1,includeAllValue:!1,multiselect:!1,param_config:!1,param_enabled:!1,param_list:[],parameter:"",sort:"asc",txt:"#000000",useFormattedValues:!1,worksheet:"",ws_config:!1,ws_enabled:!1,ws_list:[]},a.bgChange=function(e){a.setState({bg:e.target.value})},a.txtChange=function(e){a.setState({txt:e.target.value})},a.paramChange=function(e){a.setState({parameter:e.target.value})},a.fieldChange=function(e){a.setState({field:e.target.value})},a.wsChange=function(e){a.setState({worksheet:e.target.value})},a.ignoreSelectionChange=function(e){a.setState({ignoreSelection:!e.target.checked})},a.aliasChange=function(e){a.setState({useFormattedValues:e.target.checked})},a.allChange=function(e){a.setState({includeAllValue:e.target.checked})},a.sortChange=function(e){a.setState({sort:e.target.value})},a.delimiterChange=function(e){a.setState({delimiter:e.target.value})},a.multiselectChange=function(e){a.setState({multiselect:e.target.checked})},a.autoUpdateChange=function(e){a.setState({autoUpdate:e.target.checked})},a.setParam=function(){""!==a.state.parameter&&g.findParameterAsync(a.state.parameter).then(function(e){a.setState({dataType:e.dataType,includeAllValue:"string"===e.dataType&&a.state.includeAllValue,multiselect:"string"===e.dataType&&a.state.multiselect,param_config:!0}),a.populateWS()})},a.clearParam=function(){a.setState({param_config:!1,param_enabled:!0,ws_enabled:!1}),a.populateParamList()},a.setWS=function(){""!==a.state.worksheet&&(a.setState({ws_config:!0}),a.populateFieldList())},a.clearWS=function(){a.setState({field_enabled:!1,ws_config:!1,ws_enabled:!0}),a.populateWS()},a.setField=function(){""!==a.state.field&&a.setState({configured:!0,field_config:!0})},a.clearField=function(){a.setState({configured:!1,field_config:!1,field_enabled:!0}),a.populateFieldList()},a.submit=function(){window.tableau.extensions.settings.set("selParam",a.state.parameter),window.tableau.extensions.settings.set("selWorksheet",a.state.worksheet),window.tableau.extensions.settings.set("selField",a.state.field),window.tableau.extensions.settings.set("bg",a.state.bg),window.tableau.extensions.settings.set("txt",a.state.txt),window.tableau.extensions.settings.set("sort",a.state.sort),window.tableau.extensions.settings.set("ignoreSelection",a.state.ignoreSelection),window.tableau.extensions.settings.set("useFormattedValues",a.state.useFormattedValues),window.tableau.extensions.settings.set("includeAllValue","string"!==a.state.dataType?"false":a.state.includeAllValue),window.tableau.extensions.settings.set("delimiter",a.state.delimiter),window.tableau.extensions.settings.set("multiselect","string"!==a.state.dataType?"false":a.state.multiselect),window.tableau.extensions.settings.set("autoUpdate",a.state.autoUpdate),window.tableau.extensions.settings.set("dataType",a.state.dataType||"string"),window.tableau.extensions.settings.set("configured","true"),window.tableau.extensions.settings.saveAsync().then(function(){window.tableau.extensions.ui.closeDialog(a.state.worksheet)})},a.clearSettings=function(){a.setState({configured:!1,field:"",field_config:!1,field_enabled:!1,field_list:[],param_config:!1,param_list:[],parameter:"",worksheet:"",ws_config:!1,ws_enabled:!1,ws_list:[]}),a.populateParamList()},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"testParamSettings",value:function(){var e=this,t=window.tableau.extensions.settings.getAll();this.state.configured?g.findParameterAsync(t.selParam).then(function(t){t&&"all"===t.allowableValues.type?(e.setState({dataType:t.dataType,param_config:!0,parameter:t.name}),e.testWSSettings()):(e.populateParamList(),e.setState({configured:!1}))}):this.populateParamList()}},{key:"populateParamList",value:function(){var e=this;this.setState({param_list:[y],parameter:y}),g.getParametersAsync().then(function(t){var a=[],n=!0,l=!1,i=void 0;try{for(var s,r=t[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var o=s.value;"all"===o.allowableValues.type&&a.push(o.name)}}catch(c){l=!0,i=c}finally{try{n||null==r.return||r.return()}finally{if(l)throw i}}a.length>0?e.setState({param_enabled:!0,param_list:a,parameter:a[0]}):e.setState({param_enabled:!1,param_list:["No open input parameters found!"],parameter:"No open input parameters found!"})})}},{key:"testWSSettings",value:function(){var e=window.tableau.extensions.settings.getAll();this.state.configured?g.worksheets.find(function(t){return t.name===e.selWorksheet})?(this.setState({worksheet:e.selWorksheet,ws_config:!0,ws_enabled:!1}),this.testFieldSettings()):(this.populateWS(),this.setState({configured:!1})):this.populateWS()}},{key:"populateWS",value:function(){this.setState({worksheet:y,ws_list:[y]});var e=[],t=!0,a=!1,n=void 0;try{for(var l,i=g.worksheets[Symbol.iterator]();!(t=(l=i.next()).done);t=!0){var s=l.value;e.push(s.name)}}catch(r){a=!0,n=r}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}e.length>0?this.setState({worksheet:e[0],ws_enabled:!0,ws_list:e}):this.setState({worksheet:"No worksheets found!",ws_enabled:!1,ws_list:["No worksheets found!"]})}},{key:"testFieldSettings",value:function(){var e=this,t=window.tableau.extensions.settings.getAll();this.state.configured?g.worksheets.find(function(t){return t.name===e.state.worksheet}).getSummaryDataAsync().then(function(a){a.columns.find(function(e){return e.fieldName===t.selField})?e.setState({configured:!0,field:t.selField,field_config:!0,field_enabled:!1}):(e.populateFieldList(),e.setState({configured:!1}))}):this.populateFieldList()}},{key:"populateFieldList",value:function(){var e,t=this;this.setState({field:y,field_list:[y]}),g.findParameterAsync(this.state.parameter).then(function(a){return e=a.dataType,g.worksheets.find(function(e){return e.name===t.state.worksheet}).getSummaryDataAsync()}).then(function(a){var n=[],l=!0,i=!1,s=void 0;try{for(var r,o=a.columns[Symbol.iterator]();!(l=(r=o.next()).done);l=!0){var c=r.value;c.dataType===e&&n.push(c.fieldName)}}catch(u){i=!0,s=u}finally{try{l||null==o.return||o.return()}finally{if(i)throw s}}n.length>0?t.setState({field:n[0],field_enabled:!0,field_list:n}):t.setState({field:"No fields found that match parameter!",field_enabled:!1,field_list:["No fields found that match parameter!"]})})}},{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeDialogAsync().then(function(){g=window.tableau.extensions.dashboardContent.dashboard;var t=window.tableau.extensions.settings.getAll();"true"===t.configured?(e.setState({autoUpdate:"true"===t.autoUpdate||!1,bg:t.bg||"#ffffff",configured:!0,dataType:t.dataType,delimiter:t.delimiter||"|",ignoreSelection:"true"===t.ignoreSelection||!1,includeAllValue:"true"===t.includeAllValue||!1,multiselect:"true"===t.multiselect||!1,sort:t.sort||"asc",txt:t.txt||"#000000",useFormattedValues:"true"===t.useFormattedValues||!1}),e.testParamSettings()):e.populateParamList()})}},{key:"render",value:function(){return o.createElement(o.Fragment,null,o.createElement("div",{className:"container"},o.createElement("div",null,o.createElement("div",{className:"header"},"Data-Driven Parameter Configuration",o.createElement("div",{className:"tooltip"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Dialogs_x5F_Info",width:"15",height:"15",viewBox:"0 0 15 15"},o.createElement("rect",{id:"Line",x:"7",y:"6",width:"1",height:"5",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),o.createElement("rect",{id:"Dot_2_",x:"7",y:"4",width:"1",height:"1",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),o.createElement("path",{id:"Circle",d:"M7.5,1C3.9,1,1,3.9,1,7.5S3.9,14,7.5,14 S14,11.1,14,7.5S11.1,1,7.5,1z M7.5,13C4.5,13,2,10.5,2,7.5C2,4.5,4.5,2,7.5,2S13,4.5,13,7.5C13,10.5,10.5,13,7.5,13z",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"})),o.createElement("span",{className:"tooltiptext"},o.createElement("b",null,"How to Use"),o.createElement("ol",null,o.createElement("li",null,'Select a Tableau parameter to manipulate. This parameter must already exists and must allow "all" values.'),o.createElement("li",null,"Select a worksheet with the data you want to use in your parameter."),o.createElement("li",null,"Select a field to use to populate the parameter. Field data type must match the data type of parameter.")),o.createElement("br",null),o.createElement("p",null,"Note: Mac Desktop 2018.3 and lower, please use arrow keys and 'Enter' to select options")))),o.createElement("div",{className:"title",style:{marginTop:"18px"}},"Configure Parameter"),o.createElement("div",{className:"content"},o.createElement(p,{selecting:"parameter",onClick:this.setParam,onClear:this.clearParam,config:this.state.param_config,nextConfig:this.state.ws_config,selected:this.state.parameter,enabled:this.state.param_enabled&&!this.state.param_config,list:this.state.param_list,onChange:this.paramChange}),o.createElement(p,{selecting:"worksheet",onClick:this.setWS,onClear:this.clearWS,config:this.state.ws_config,nextConfig:this.state.field_config,selected:this.state.worksheet,enabled:this.state.ws_enabled,list:this.state.ws_list,onChange:this.wsChange}),o.createElement(p,{selecting:"field",onClick:this.setField,onClear:this.clearField,config:this.state.field_config,selected:this.state.field,enabled:this.state.field_enabled,list:this.state.field_list,onChange:this.fieldChange})),o.createElement("div",{className:"title"},"Options"),o.createElement("div",{className:"content"},o.createElement("div",{className:"option"},o.createElement(m.Checkbox,{checked:!this.state.ignoreSelection,onChange:this.ignoreSelectionChange,style:{flexGrow:1}},"Filter parameter list based on worksheet selections")),o.createElement("div",{className:"option"},o.createElement(m.Checkbox,{checked:this.state.useFormattedValues,onChange:this.aliasChange,style:{flexGrow:1}},"Use aliased values")),o.createElement("div",{className:"option"},o.createElement(m.Checkbox,{checked:this.state.autoUpdate,onChange:this.autoUpdateChange,style:{flexGrow:1}},"Automatically reset values on load.")),o.createElement("div",{className:"option"},"Sorting:",o.createElement(m.Radio,{checked:"asc"===this.state.sort,onChange:this.sortChange,name:"sorting",value:"asc",style:{margin:"0px 12px"}},"Ascending (A-Z)"),o.createElement(m.Radio,{checked:"desc"===this.state.sort,onChange:this.sortChange,name:"sorting",value:"desc",style:{margin:"0px 12px"}},"Descending (Z-A)")),o.createElement("div",{className:"option"},o.createElement("p",null,o.createElement("i",null,"For use with string parameters only:"))),o.createElement("div",{className:"option"},o.createElement(m.Checkbox,{disabled:"string"!==this.state.dataType,checked:this.state.includeAllValue,onChange:this.allChange,style:{flexGrow:1}},'Include "(All)" in parameter list ',o.createElement("br",null)," ",o.createElement("i",null,"Note: This is only a placeholder for calculations."))),o.createElement("div",{className:"option"},o.createElement(m.Checkbox,{disabled:"string"!==this.state.dataType,checked:this.state.multiselect,onChange:this.multiselectChange,style:{marginRight:"10px"}},"Allow for multiple selections."),o.createElement("span",{children:"Delimiter:",style:{marginRight:"5px"}}),o.createElement(m.TextField,{kind:"line",onChange:this.delimiterChange,className:"delimiter-text-field",value:this.state.delimiter,disabled:!this.state.multiselect||"string"!==this.state.dataType,maxLength:1,style:{width:20}}))),o.createElement("div",{className:"title"},"Formatting"),o.createElement("div",{className:"content"},o.createElement("div",{className:"format"},o.createElement("div",{className:"formattext"},"Background Color"),o.createElement("div",null,o.createElement("input",{type:"color",value:this.state.bg,onChange:this.bgChange,style:{backgroundColor:this.state.bg}}))),o.createElement("div",{className:"format"},o.createElement("div",{className:"formattext"},"Text Color"),o.createElement("div",null,o.createElement("input",{type:"color",value:this.state.txt,onChange:this.txtChange,style:{backgroundColor:this.state.txt}}))))),o.createElement("div",{className:"footer"},o.createElement("div",{className:"btncluster"},o.createElement(m.Button,{onClick:this.clearSettings,style:{marginRight:"auto"}},"Clear Settings"),o.createElement(m.Button,{kind:"filledGreen",onClick:this.submit,disabled:!this.state.configured||!this.state.ws_config,style:{marginLeft:"12px"}},"OK")))))}}]),t}(o.Component),E=(a(29),"Parameter needs configuration");function x(e){var t=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{b:parseInt(t[3],16),g:parseInt(t[2],16),r:parseInt(t[1],16)}:null}(e);return t?"rgb(".concat(Math.min(Math.floor(t.r/2)+127,255),", ").concat(Math.min(Math.floor(t.g/2)+127,255),", ").concat(Math.min(Math.floor(t.b/2)+127,255),")"):"#ffffff"}var S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={bg:"#ffffff",configured:!1,currentVal:[E],disabled:!0,firstInit:!0,list:[E],multiselect:!1},a.configure=function(){var e=window.location.origin.includes("localhost")?"".concat(window.location.origin,"/#/config"):"".concat(window.location.origin,"/extension-data-driven-parameters/#/config");window.tableau.extensions.ui.displayDialogAsync(e,"",{height:700,width:450}).then(function(e){var t=window.tableau.extensions.settings.getAll();""!==e?(document.body.style.backgroundColor=t.bg,document.body.style.color=t.txt,a.setState({bg:t.bg?x(t.bg):"#ffffff",multiselect:"true"===t.multiselect}),a.findParameter()):a.setState({currentVal:[E],disabled:!0,list:[E]})}).catch(function(e){switch("true"!==window.tableau.extensions.settings.get("configured")&&a.setState({currentVal:[E],disabled:!0,list:[E]}),e.errorCode){case window.tableau.ErrorCodes.DialogClosedByUser:console.log("Dialog was closed by user.");break;default:console.error(e.message)}})},a.getParamData=function(){var e=window.tableau.extensions.settings.getAll(),t=b.worksheets.find(function(t){return t.name===e.selWorksheet});t?t.getSummaryDataAsync({ignoreSelection:"true"===e.ignoreSelection}).then(function(e){a.populateParam(e)}):a.setState({currentVal:[E],disabled:!0,list:[E]})},a.updateParam=function(e){var t,n=window.tableau.extensions.settings.getAll(),l=[],i=!0,s=!1,r=void 0;try{for(var o,c=e.target.options[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var u=o.value;u.selected&&l.push(u.value)}}catch(d){s=!0,r=d}finally{try{i||null==c.return||c.return()}finally{if(s)throw r}}t=l.join(n.delimiter),w?(w.changeValueAsync(t),a.setState({currentVal:l},function(){console.log(a.state.currentVal)})):a.setState({currentVal:[E],disabled:!0,list:[E]}),a.state.multiselect||a.getParamData()},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"findParameter",value:function(){var e=this,t=window.tableau.extensions.settings.getAll();window.tableau.extensions.dashboardContent.dashboard.findParameterAsync(t.selParam).then(function(t){(w=t)&&"all"===w.allowableValues.type?(e.getParamData(),e.setupWsEvent()):e.setState({currentVal:[E],disabled:!0,list:[E]})})}},{key:"populateParam",value:function(e){var t=window.tableau.extensions.settings.getAll(),a=e.columns.find(function(e){return e.fieldName===t.selField});if(a){var n,l=[],i=!0,s=!1,r=void 0;try{for(var o,c=e.data[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var u=o.value;l.push("true"===t.useFormattedValues?u[a.index].formattedValue:u[a.index].value)}}catch(d){s=!0,r=d}finally{try{i||null==c.return||c.return()}finally{if(s)throw r}}l=l.filter(function(e,t,a){return a.indexOf(e)===t}),!t.dataType||"int"!==t.dataType&&"float"!==t.dataType?t.sort&&"desc"===t.sort?(l.sort(),l.reverse()):l.sort():(l=l.map(Number),t.sort&&"desc"===t.sort?l.sort(function(e,t){return t-e}):l.sort(function(e,t){return e-t})),"true"===t.includeAllValue&&l.unshift("(All)"),n=("false"===t.autoUpdate||"true"===t.autoUpdate&&!this.state.firstInit)&&l.find(function(e){return e.toString()===w.currentValue.value.toString()})?w.currentValue.value:"true"===t.includeAllValue?l[1]:l[0],this.setState({currentVal:[n],disabled:!1,firstInit:!1,list:l}),w.changeValueAsync(n)}else this.setState({currentVal:[E],disabled:!0,list:[E]})}},{key:"setupWsEvent",value:function(){var e=window.tableau.extensions.settings.getAll(),t=b.worksheets.find(function(t){return t.name===e.selWorksheet});t?(t.addEventListener(window.tableau.TableauEventType.FilterChanged,this.getParamData),t.addEventListener(window.tableau.TableauEventType.MarkSelectionChanged,this.getParamData)):this.setState({currentVal:[E],disabled:!0,list:[E]})}},{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeAsync({configure:this.configure}).then(function(){b=window.tableau.extensions.dashboardContent.dashboard;var t=window.tableau.extensions.settings.getAll();"true"===t.configured?(document.body.style.backgroundColor=t.bg,document.body.style.color=t.txt,e.setState({bg:t.bg?x(t.bg):"#ffffff",configured:!0,multiselect:"true"===t.multiselect}),e.findParameter()):e.configure()})}},{key:"render",value:function(){return o.createElement(o.Fragment,null,o.createElement("div",{style:{display:this.state.multiselect?"flex":"none"}},o.createElement("select",{multiple:!0,id:"multi-select-parameter",className:"parameter",value:this.state.currentVal,onChange:this.updateParam,disabled:this.state.disabled,style:{backgroundColor:this.state.bg,color:"inherit"}},this.state.list.map(function(e){return o.createElement("option",{key:e,value:e},e)}))),o.createElement("div",{style:{display:this.state.multiselect?"none":"flex"}},o.createElement(m.DropdownSelect,{id:"single-select-parameter",className:"singleParameter",disabled:this.state.disabled||this.state.multiselect,kind:"outline",onChange:this.updateParam,value:this.state.currentVal[0],style:{backgroundColor:this.state.bg,color:"inherit"}},this.state.list.map(function(e){return o.createElement("option",{key:e},e)}))))}}]),t}(o.Component),C=(a(30),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.createElement(o.Fragment,null,o.createElement("div",{className:"icontainer"},o.createElement("div",{className:"box"},o.createElement("div",{className:"left"},o.createElement("h1",{className:"iheader"},"Data-Driven Parameters"),o.createElement("span",{className:"tagline"},"Automatically update your parameters based on your data!")),o.createElement("div",{className:"right"},o.createElement("h4",{className:"big"},"What is it?"),o.createElement("p",null,"This extension allows you to add a parameter to a Tableau dashboard whose domain is based on your data. Added a new product line? No longer do you need to manually edit the parameter to update it, with this extension your parameter values update automatically!"),o.createElement("h4",{className:"big"},"Using the Extension"),o.createElement("ol",null,o.createElement("li",null,"Create an open input (All) parameter with a data type matching the field you want to use to populate it."),o.createElement("li",null,"Drag in a new Extension object to your dashboard."),o.createElement("li",null,"Find the manifest (.trex) file you downloaded above."),o.createElement("li",null,"Select the parameter you created above for the extension to manipulate."),o.createElement("li",null,"Select the worksheet that holds the field you want to base your parameter on."),o.createElement("li",null,"Select the field you want to base your parameter on."),o.createElement("li",null,"Optional: Configure your text and background colors."),o.createElement("li",null,"Click 'OK'.")),o.createElement("p",null,o.createElement("b",null,"Note:")," You can add as many instances of this extension as you like!"),o.createElement("div",{className:"gh"},"Get this extension and more in the ",o.createElement("a",{href:"https://extensiongallery.tableau.com/"},"Extension Gallery"),".")))))}}]),t}(o.Component)),k=function(){return o.createElement(o.Fragment,null,o.createElement(u.a,{path:"/",exact:!0,component:C}),o.createElement(u.a,{path:"/parameter",component:S}),o.createElement(u.a,{path:"/config",component:v}))},_=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.createElement(d.a,null,o.createElement(k,null))}}]),t}(o.Component);c.render(o.createElement(_,null),document.getElementById("container"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3ac4c659.chunk.js.map