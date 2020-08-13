/* layui_dropdown v2.3.0 by Microanswer,doc:http://layuidropdown.microanswer.cn/ */
layui.define(["jquery","laytpl"],function(t){var d=layui.jquery||layui.$,r=layui.laytpl,e="a",s={},c="1",u="2",m="3";function f(t){if(!t)throw new Error("菜单条目内必须填写内容。");if("hr"===t)return"hr";if(0!==t.indexOf("{"))throw new Error("除了分割线hr，别的菜单条目都必须保证是合格的Javascript对象或json对象。");return new Function("return "+t)()}var a=window.MICROANSWER_DROPDOWAN||"dropdown",h="<div tabindex='0' class='layui-anim layui-anim-upbit dropdown-root' "+a+"-id='{{d.downid}}' style='display: none;z-index: {{d.zIndex}}'>{{# if (d.arrow){ }}<div class='dropdown-pointer'></div>{{# } }}<div class='dropdown-content' style='margin: {{d.gap}}px {{d.gap}}px;background-color: {{d.backgroundColor}};min-width: {{d.minWidth}}px;max-width: {{d.maxWidth}}px;min-height: {{d.minHeight}}px;max-height: {{d.maxHeight}}px;white-space: {{d.nowrap?\"nowrap\":\"normal\"}}'>",p="</div></div>",l=h+"{{# layui.each(d.menus, function(i, menu){ }}<ul class='dropdown-menu'>{{# layui.each(menu, function(index, item){ }}<li>{{# if ('hr' === item) { }}<hr>{{# } else if (item.header) { }}{{# if (item.withLine) { }}<fieldset class=\"layui-elem-field layui-field-title menu-header withLine\"><legend>{{item.header}}</legend></fieldset>{{# } else { }}<div class='menu-header' style='text-align: {{item.align||'left'}}'>{{item.header}}</div>{{# } }}{{# } else { }}<div class='menu-item'><a href='javascript:;' lay-event='{{item.event}}'>{{# if (item.layIcon){ }}<i class='layui-icon {{item.layIcon}}'></i>&nbsp;{{# } }}<span class='{{item.txtClass||\"\"}}'>{{item.txt}}</span></a></div>{{# } }}</li>{{# }); }}</ul>{{#});}}"+p,n={menus:[],templateMenu:"",template:"",showBy:"click",align:"left",minWidth:80,maxWidth:500,minHeight:10,maxHeight:400,zIndex:891,gap:8,onHide:function(t,i){},onShow:function(t,i){},scrollBehavior:"follow",backgroundColor:"#FFF",cssLink:"https://cdn.jsdelivr.net/gh/microanswer/layui_dropdown@2.3.0/dist/dropdown.css",immed:!1,arrow:!0,templateMenuSptor:"[]",menuSplitor:!0};function w(t,i){"string"==typeof t&&(t=d(t)),this.$dom=t,this.option=d.extend({downid:String(Math.random()).split(".")[1],filter:t.attr("lay-filter")},n,i),20<this.option.gap&&(this.option.gap=20),this.init()}function o(t,o){d(t||"[lay-"+a+"]").each(function(){var t=d(this),i=new Function("return "+(t.attr("lay-"+a)||"{}"))();t.removeAttr("lay-"+a);var n=t.data(a)||new w(t,d.extend({},i,o||{}));t.data(a,n)})}window[a+"_useOwnCss"]||layui.link(window[a+"_cssLink"]||n.cssLink,function(){},a+"_css"),w.prototype.init=function(){var i=this,t=!1;if(i.option.menus&&0<i.option.menus.length){t=!0;var n=i.option.menus[0];Array.isArray(n)||(i.option.menus=[i.option.menus]),i.option.nowrap=!0,r(l).render(i.option,function(t){i.downHtml=t,i.initEvent()})}else if(i.option.templateMenu){var o;t=!1,o=-1===i.option.templateMenu.indexOf("#")?"#"+i.option.templateMenu:i.option.templateMenu;var e=d.extend(d.extend({},i.option),i.option.data||{});r(d(o).text()).render(e,function(t){i.option.menus=function(t,i){if(!t)return"";if(!i)throw new Error("请指定菜单模板限定符。");for(var n,o,e=i.charAt(0),s=i.charAt(1),d=t.length,r=0,a=c,h=!1,p=[];r<d;){var l=t.charAt(r);a!==c||h?a!==u||h?a===m&&(h?(o.srcStr+=l,h=!1):"\\"===l?h=!0:l===s?(o=f(o.srcStr),n.push(o),a=u):o.srcStr+=l):e===l?(o={srcStr:""},a=m):s===l&&(a=c):e===l&&(n=[],p.push(n),a=u),r+=1}return p}(t,i.option.templateMenuSptor),i.option.nowrap=!0,r(l).render(i.option,function(t){i.downHtml=t,i.initEvent()})})}else if(i.option.template){var s;t=!0,s=-1===i.option.template.indexOf("#")?"#"+i.option.template:i.option.template,(e=d.extend(d.extend({},i.option),i.option.data||{})).nowrap=!1,r(h+d(s).html()+p).render(e,function(t){i.downHtml=t,i.initEvent()})}else layui.hint().error("下拉框目前即没配置菜单项，也没配置下拉模板。[#"+(i.$dom.attr("id")||"")+",filter="+i.option.filter+"]");t&&this.option.immed&&this.downHtml&&this.show()},w.prototype.initSize=function(){if(this.$down){this.$down.find(".dropdown-pointer").css({width:2*this.option.gap,height:2*this.option.gap});var t=0;this.$down.find(".dropdown-menu").each(function(){t=Math.max(t,d(this).height())}),this.$down.find(".dropdown-menu").css({height:t})}},w.prototype.initPosition=function(){if(this.$down){var t,i,n,o,e=this.$dom.offset(),s=this.$dom.outerHeight(),d=this.$dom.outerWidth(),r=e.left,a=e.top-window.pageYOffset,h=this.$down.outerHeight(),p=this.$down.outerWidth();n="right"===this.option.align?(t=r+d-p+this.option.gap,-Math.min(p-2*this.option.gap,d)/2):"center"===this.option.align?(t=r+(d-p)/2,(p-2*this.option.gap)/2):(t=r-this.option.gap,Math.min(p-2*this.option.gap,d)/2),i=s+a;var l=this.$arrowDom;o=-this.option.gap,0<n?(l.css("left",n),l.css("right","unset")):(l.css("left","unset"),l.css("right",-1*n)),t+p>=window.innerWidth&&(t=window.innerWidth-p+this.option.gap),i+h>=window.innerHeight?(i=a-h,o=h-this.option.gap,l.css("top",o).addClass("bottom")):l.css("top",o).removeClass("bottom"),this.$down.css("left",t),this.$down.css("top",i)}},w.prototype.show=function(){var n,t,i=this,o=!1;i.$down||(i.$down=d(i.downHtml),i.$dom.after(i.$down),i.$arrowDom=i.$down.find(".dropdown-pointer"),o=!0),i.initPosition(),i.opening=!0,setTimeout(function(){i.$down.focus()},100),i.$down.addClass("layui-show"),i.initSize(),i.opened=!0,o&&i.initDropdownEvent(),n=i,t=s[e]||[],d.each(t,function(t,i){i(n)}),o&&i.onSuccess(),i.option.onShow&&i.option.onShow(i.$dom,i.$down)},w.prototype.hide=function(){this.opened&&(this.fcd=!1,this.$down.removeClass("layui-show"),this.opened=!1,this.option.onHide&&this.option.onHide(this.$dom,this.$down))},w.prototype.hideWhenCan=function(){this.mic||this.opening||this.fcd||this.hide()},w.prototype.toggle=function(){this.opened?this.hide():this.show()},w.prototype.onSuccess=function(){this.option.success&&this.option.success(this.$down)},w.prototype._onScroll=function(){var t=this;t.opened&&("follow"===this.option.scrollBehavior?setTimeout(function(){t.initPosition()},1):this.hide())},w.prototype.initEvent=function(){var t,i,n,o=this;i=function(t){t!==o&&o.hide()},(n=s[t=e]||[]).push(i),s[t]=n,d(window).on("scroll",function(){o._onScroll()}),o.$dom.parents().on("scroll",function(){o._onScroll()}),d(window).on("resize",function(){o.opened&&o.initPosition()}),o.initDomEvent()},w.prototype.initDomEvent=function(){var t=this;t.$dom.mouseenter(function(){t.mic=!0,"hover"===t.option.showBy&&(t.fcd=!0,t.show())}),t.$dom.mouseleave(function(){t.mic=!1}),"click"===t.option.showBy&&t.$dom.on("click",function(){t.fcd=!0,t.toggle()}),t.$dom.on("blur",function(){t.fcd=!1,t.hideWhenCan()})},w.prototype.initDropdownEvent=function(){var i=this;i.$down.mouseenter(function(){i.mic=!0,i.$down.focus()}),i.$down.mouseleave(function(){i.mic=!1}),i.$down.on("blur",function(){i.fcd=!1,i.hideWhenCan()}),i.$down.on("focus",function(){i.opening=!1}),i.option.menus&&d("["+a+"-id='"+i.option.downid+"']").on("click","a",function(){var t=(d(this).attr("lay-event")||"").trim();t?(layui.event.call(this,a,a+"("+i.option.filter+")",t),i.hide()):layui.hint().error("菜单条目["+this.outerHTML+"]未设置event。")})},o(),t(a,{suite:o,onFilter:function(t,i){layui.onevent(a,a+"("+t+")",function(t){i&&i(t)})},hide:function(t){d(t).each(function(){var t=d(this).data(a);t&&t.hide()})},show:function(i,n){d(i).each(function(){var t=d(this).data(a);t?t.show():(layui.hint().error("警告：尝试在选择器【"+i+"】上进行下拉框show操作，但此选择器对应的dom并没有初始化下拉框。"),(n=n||{}).immed=!0,o(i,n))})},version:"2.3.0"})});