"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[6032],{"./packages/components/build-module/item-group/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemGroupContext,X:()=>useItemGroupContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemGroupContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({size:"medium"}),useItemGroupContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ItemGroupContext)},"./packages/components/build-module/item-group/item-group/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>item_group_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),styles=__webpack_require__("./packages/components/build-module/item-group/styles.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var context=__webpack_require__("./packages/components/build-module/item-group/context.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const item_group_component=(0,context_connect.Iq)((function UnconnectedItemGroup(props,forwardedRef){const{isBordered,isSeparated,size:sizeProp,...otherProps}=function useItemGroup(props){const{className,isBordered=!1,isRounded=!0,isSeparated=!1,role="list",...otherProps}=(0,use_context_system.y)(props,"ItemGroup");return{isBordered,className:(0,use_cx.I)()(isBordered&&styles.Dq,isSeparated&&styles.s4,isRounded&&styles.eP,className),role,isSeparated,...otherProps}}(props),{size:contextSize}=(0,context.X)(),contextValue={spacedAround:!isBordered&&!isSeparated,size:sizeProp||contextSize};return(0,jsx_runtime.jsx)(context.K.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(component.Z,{...otherProps,ref:forwardedRef})})}),"ItemGroup")},"./packages/components/build-module/item-group/item/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>item_component});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),styles=__webpack_require__("./packages/components/build-module/item-group/styles.js"),context=__webpack_require__("./packages/components/build-module/item-group/context.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const item_component=(0,context_connect.Iq)((function UnconnectedItem(props,forwardedRef){const{role,wrapperClassName,...otherProps}=function useItem(props){const{as:asProp,className,onClick,role="listitem",size:sizeProp,...otherProps}=(0,use_context_system.y)(props,"Item"),{spacedAround,size:contextSize}=(0,context.X)(),size=sizeProp||contextSize,as=asProp||(void 0!==onClick?"button":"div"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(("button"===as||"a"===as)&&styles.W6(as),styles.KA[size]||styles.KA.medium,styles.wc,spacedAround&&styles.by,className)),[as,className,cx,size,spacedAround]),wrapperClassName=cx(styles.g_);return{as,className:classes,onClick,wrapperClassName,role,...otherProps}}(props);return(0,jsx_runtime.jsx)("div",{role,className:wrapperClassName,children:(0,jsx_runtime.jsx)(component.Z,{...otherProps,ref:forwardedRef})})}),"Item")},"./packages/components/build-module/item-group/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dq:()=>bordered,KA:()=>itemSizes,W6:()=>unstyledButton,by:()=>spacedAround,eP:()=>rounded,g_:()=>itemWrapper,s4:()=>separated,wc:()=>item});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/utils/font.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/config-values.js");const unstyledButton=as=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("font-size:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.L)("default.fontSize"),";font-family:inherit;appearance:none;border:1px solid transparent;cursor:pointer;background:none;text-align:start;text-decoration:","a"===as?"none":void 0,";svg,path{fill:currentColor;}&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.accent,";}&:focus{box-shadow:none;outline:none;}&:focus-visible{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.accent,";outline:2px solid transparent;outline-offset:0;}","","",""),itemWrapper={name:"1bcj5ek",styles:"width:100%;display:block"},item={name:"150ruhm",styles:"box-sizing:border-box;width:100%;display:block;margin:0;color:inherit"},bordered=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.surfaceBorderColor,";","","",""),separated=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(">*:not( marquee )>*{border-bottom:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.surfaceBorderColor,";}>*:last-of-type>*:not( :focus ){border-bottom-color:transparent;}","","",""),borderRadius=_utils__WEBPACK_IMPORTED_MODULE_3__.Z.radiusSmall,spacedAround=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border-radius:",borderRadius,";","","",""),rounded=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border-radius:",borderRadius,";>*:first-of-type>*{border-top-left-radius:",borderRadius,";border-top-right-radius:",borderRadius,";}>*:last-of-type>*{border-bottom-left-radius:",borderRadius,";border-bottom-right-radius:",borderRadius,";}","","",""),baseFontHeight=`calc(${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.fontSize} * ${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.fontLineHeightBase})`,paddingY=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeight} - ${baseFontHeight} - 2px) / 2)`,paddingYSmall=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeightSmall} - ${baseFontHeight} - 2px) / 2)`,paddingYLarge=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeightLarge} - ${baseFontHeight} - 2px) / 2)`,itemSizes={small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingYSmall," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingXSmall,";","","",""),medium:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingY," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingX,";","","",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingYLarge," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingXLarge,";","","","")}},"./packages/components/build-module/modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>modal});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_focus_on_mount=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),use_constrained_tabbing=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),use_focus_return=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");const LIVE_REGION_ARIA_ROLES=new Set(["alert","status","log","marquee","timer"]),hiddenElementsByDepth=[];function elementShouldBeHidden(element){const role=element.getAttribute("role");return!("SCRIPT"===element.tagName||element.hasAttribute("aria-hidden")||element.hasAttribute("aria-live")||role&&LIVE_REGION_ARIA_ROLES.has(role))}var build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),style_provider=__webpack_require__("./packages/components/build-module/style-provider/index.js"),with_ignore_ime_events=__webpack_require__("./packages/components/build-module/utils/with-ignore-ime-events.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalContext=(0,react.createContext)(new Set),bodyOpenClasses=new Map;const Modal=(0,react.forwardRef)((function UnforwardedModal(props,forwardedRef){const{bodyOpenClassName="modal-open",role="dialog",title=null,focusOnMount=!0,shouldCloseOnEsc=!0,shouldCloseOnClickOutside=!0,isDismissible=!0,aria={labelledby:void 0,describedby:void 0},onRequestClose,icon,closeButtonLabel,children,style,overlayClassName,className,contentLabel,onKeyDown,isFullScreen=!1,size,headerActions=null,__experimentalHideHeader=!1}=props,ref=(0,react.useRef)(),instanceId=(0,use_instance_id.Z)(Modal),headingId=title?`components-modal-header-${instanceId}`:aria.labelledby,focusOnMountRef=(0,use_focus_on_mount.Z)("firstContentElement"===focusOnMount?"firstElement":focusOnMount),constrainedTabbingRef=(0,use_constrained_tabbing.Z)(),focusReturnRef=(0,use_focus_return.Z)(),contentRef=(0,react.useRef)(null),childrenContainerRef=(0,react.useRef)(null),[hasScrolledContent,setHasScrolledContent]=(0,react.useState)(!1),[hasScrollableContent,setHasScrollableContent]=(0,react.useState)(!1);let sizeClass;isFullScreen||"fill"===size?sizeClass="is-full-screen":size&&(sizeClass=`has-size-${size}`);const isContentScrollable=(0,react.useCallback)((()=>{if(!contentRef.current)return;const closestScrollContainer=(0,get_scroll_container.Z)(contentRef.current);contentRef.current===closestScrollContainer?setHasScrollableContent(!0):setHasScrollableContent(!1)}),[contentRef]);(0,react.useEffect)((()=>(function modalize(modalElement){const elements=Array.from(document.body.children),hiddenElements=[];hiddenElementsByDepth.push(hiddenElements);for(const element of elements)element!==modalElement&&elementShouldBeHidden(element)&&(element.setAttribute("aria-hidden","true"),hiddenElements.push(element))}(ref.current),()=>function unmodalize(){const hiddenElements=hiddenElementsByDepth.pop();if(hiddenElements)for(const element of hiddenElements)element.removeAttribute("aria-hidden")}())),[]);const refOnRequestClose=(0,react.useRef)();(0,react.useEffect)((()=>{refOnRequestClose.current=onRequestClose}),[onRequestClose]);const dismissers=(0,react.useContext)(ModalContext),[nestedDismissers]=(0,react.useState)((()=>new Set));(0,react.useEffect)((()=>{dismissers.add(refOnRequestClose);for(const dismisser of dismissers)dismisser!==refOnRequestClose&&dismisser.current?.();return()=>{for(const dismisser of nestedDismissers)dismisser.current?.();dismissers.delete(refOnRequestClose)}}),[dismissers,nestedDismissers]),(0,react.useEffect)((()=>{var _bodyOpenClasses$get;const theClass=bodyOpenClassName,oneMore=1+(null!==(_bodyOpenClasses$get=bodyOpenClasses.get(theClass))&&void 0!==_bodyOpenClasses$get?_bodyOpenClasses$get:0);return bodyOpenClasses.set(theClass,oneMore),document.body.classList.add(bodyOpenClassName),()=>{const oneLess=bodyOpenClasses.get(theClass)-1;0===oneLess?(document.body.classList.remove(theClass),bodyOpenClasses.delete(theClass)):bodyOpenClasses.set(theClass,oneLess)}}),[bodyOpenClassName]),(0,react.useLayoutEffect)((()=>{if(!window.ResizeObserver||!childrenContainerRef.current)return;const resizeObserver=new ResizeObserver(isContentScrollable);return resizeObserver.observe(childrenContainerRef.current),isContentScrollable(),()=>{resizeObserver.disconnect()}}),[isContentScrollable,childrenContainerRef]);const onContentContainerScroll=(0,react.useCallback)((e=>{var _e$currentTarget$scro;const scrollY=null!==(_e$currentTarget$scro=e?.currentTarget?.scrollTop)&&void 0!==_e$currentTarget$scro?_e$currentTarget$scro:-1;!hasScrolledContent&&scrollY>0?setHasScrolledContent(!0):hasScrolledContent&&scrollY<=0&&setHasScrolledContent(!1)}),[hasScrolledContent]);let pressTarget=null;const overlayPressHandlers={onPointerDown:event=>{event.target===event.currentTarget&&(pressTarget=event.target,event.preventDefault())},onPointerUp:({target,button})=>{const isSameTarget=target===pressTarget;pressTarget=null,0===button&&isSameTarget&&onRequestClose()}},modal=(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([ref,forwardedRef]),className:(0,clsx.Z)("components-modal__screen-overlay",overlayClassName),onKeyDown:(0,with_ignore_ime_events.U)((function handleEscapeKeyDown(event){!shouldCloseOnEsc||"Escape"!==event.code&&"Escape"!==event.key||event.defaultPrevented||(event.preventDefault(),onRequestClose&&onRequestClose(event))})),...shouldCloseOnClickOutside?overlayPressHandlers:{},children:(0,jsx_runtime.jsx)(style_provider.Z,{document,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.Z)("components-modal__frame",sizeClass,className),style,ref:(0,use_merge_refs.Z)([constrainedTabbingRef,focusReturnRef,"firstContentElement"!==focusOnMount?focusOnMountRef:null]),role,"aria-label":contentLabel,"aria-labelledby":contentLabel?void 0:headingId,"aria-describedby":aria.describedby,tabIndex:-1,onKeyDown,children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)("components-modal__content",{"hide-header":__experimentalHideHeader,"is-scrollable":hasScrollableContent,"has-scrolled-content":hasScrolledContent}),role:"document",onScroll:onContentContainerScroll,ref:contentRef,"aria-label":hasScrollableContent?(0,build_module.__)("Scrollable section"):void 0,tabIndex:hasScrollableContent?0:void 0,children:[!__experimentalHideHeader&&(0,jsx_runtime.jsxs)("div",{className:"components-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"components-modal__header-heading-container",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:icon}),title&&(0,jsx_runtime.jsx)("h1",{id:headingId,className:"components-modal__header-heading",children:title})]}),headerActions,isDismissible&&(0,jsx_runtime.jsx)(build_module_button.ZP,{onClick:onRequestClose,icon:library_close.Z,label:closeButtonLabel||(0,build_module.__)("Close")})]}),(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([childrenContainerRef,"firstContentElement"===focusOnMount?focusOnMountRef:null]),children})]})})})});return(0,react_dom.createPortal)((0,jsx_runtime.jsx)(ModalContext.Provider,{value:nestedDismissers,children:modal}),document.body)})),modal=Modal},"./packages/components/build-module/search-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>search_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),search=__webpack_require__("./packages/icons/build-module/library/search.js"),close_small=__webpack_require__("./packages/icons/build-module/library/close-small.js"),react=__webpack_require__("./node_modules/react/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),context_system_provider=__webpack_require__("./packages/components/build-module/context/context-system-provider.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js"),input_control=__webpack_require__("./packages/components/build-module/input-control/index.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js");const inlinePadding=({size})=>(0,space.D)("compact"===size?1:2),SuffixItemWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"effl84m1"})("display:flex;padding-inline-end:",inlinePadding,";svg{fill:currentColor;}"),StyledInputControl=(0,emotion_styled_base_browser_esm.Z)(input_control.ZP,{target:"effl84m0"})("input[type='search']{&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{-webkit-appearance:none;}}&:not( :focus-within ){--wp-components-color-background:",colors_values.D.theme.gray[100],";}");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SuffixItem({searchRef,value,onChange,onClose}){if(!onClose&&!value)return(0,jsx_runtime.jsx)(icon.Z,{icon:search.Z});return(0,jsx_runtime.jsx)(build_module_button.ZP,{size:"small",icon:close_small.Z,label:onClose?(0,build_module.__)("Close search"):(0,build_module.__)("Reset search"),onClick:null!=onClose?onClose:()=>{onChange(""),searchRef.current?.focus()}})}const SearchControl=(0,react.forwardRef)((function UnforwardedSearchControl({__nextHasNoMarginBottom=!1,className,onChange,value,label=(0,build_module.__)("Search"),placeholder=(0,build_module.__)("Search"),hideLabelFromVision=!0,onClose,size="default",...restProps},forwardedRef){delete restProps.disabled;const searchRef=(0,react.useRef)(null),instanceId=(0,use_instance_id.Z)(SearchControl,"components-search-control"),contextValue=(0,react.useMemo)((()=>({BaseControl:{_overrides:{__nextHasNoMarginBottom},__associatedWPComponentName:"SearchControl"},InputBase:{isBorderless:!0}})),[__nextHasNoMarginBottom]);return(0,jsx_runtime.jsx)(context_system_provider.G8,{value:contextValue,children:(0,jsx_runtime.jsx)(StyledInputControl,{__next40pxDefaultSize:!0,id:instanceId,hideLabelFromVision,label,ref:(0,use_merge_refs.Z)([searchRef,forwardedRef]),type:"search",size,className:(0,clsx.Z)("components-search-control",className),onChange:nextValue=>onChange(null!=nextValue?nextValue:""),autoComplete:"off",placeholder,value:null!=value?value:"",suffix:(0,jsx_runtime.jsx)(SuffixItemWrapper,{size,children:(0,jsx_runtime.jsx)(SuffixItem,{searchRef,value,onChange,onClose})}),...restProps})})})),search_control=SearchControl},"./packages/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((function UnforwardedToggleGroupControlOptionIcon(props,ref){const{icon,label,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,isIcon:!0,"aria-label":label,showTooltip:!0,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon})})}))},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,"aria-label":optionLabel,ref,children:label})}))},"./packages/components/build-module/toolbar/toolbar-button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toolbar_button});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js"),toolbar_context=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const toolbar_button_container=({children,className})=>(0,jsx_runtime.jsx)("div",{className,children});const toolbar_button=(0,react.forwardRef)((function UnforwardedToolbarButton(props,ref){const{children,className,containerClassName,extraProps,isActive,title,...restProps}=function useDeprecatedProps({isDisabled,...otherProps}){return{disabled:isDisabled,...otherProps}}(props);return(0,react.useContext)(toolbar_context.Z)?(0,jsx_runtime.jsx)(toolbar_item.Z,{className:(0,clsx.Z)("components-toolbar-button",className),...extraProps,...restProps,ref,children:toolbarItemProps=>(0,jsx_runtime.jsx)(build_module_button.ZP,{label:title,isPressed:isActive,...toolbarItemProps,children})}):(0,jsx_runtime.jsx)(toolbar_button_container,{className:containerClassName,children:(0,jsx_runtime.jsx)(build_module_button.ZP,{ref,icon:restProps.icon,label:title,shortcut:restProps.shortcut,"data-subscript":restProps.subscript,onClick:event=>{event.stopPropagation(),restProps.onClick&&restProps.onClick(event)},className:(0,clsx.Z)("components-toolbar__control",className),isPressed:isActive,accessibleWhenDisabled:!0,"data-toolbar-item":!0,...extraProps,...restProps,children})})}))},"./packages/components/build-module/toolbar/toolbar-context/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react/index.js").createContext)(void 0)},"./packages/components/build-module/toolbar/toolbar-group/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toolbar_group});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),toolbar_button=__webpack_require__("./packages/components/build-module/toolbar/toolbar-button/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const toolbar_group_container=({className,children,...props})=>(0,jsx_runtime.jsx)("div",{className,...props,children});var dropdown_menu=__webpack_require__("./packages/components/build-module/dropdown-menu/index.js"),toolbar_context=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js");const toolbar_group_collapsed=function ToolbarGroupCollapsed({controls=[],toggleProps,...props}){const renderDropdownMenu=internalToggleProps=>(0,jsx_runtime.jsx)(dropdown_menu.Z,{controls,toggleProps:{...internalToggleProps,"data-toolbar-item":!0},...props});return(0,react.useContext)(toolbar_context.Z)?(0,jsx_runtime.jsx)(toolbar_item.Z,{...toggleProps,children:renderDropdownMenu}):renderDropdownMenu(toggleProps)};const toolbar_group=function ToolbarGroup({controls=[],children,className,isCollapsed,title,...props}){const accessibleToolbarState=(0,react.useContext)(toolbar_context.Z);if(!(controls&&controls.length||children))return null;const finalClassName=(0,clsx.Z)(accessibleToolbarState?"components-toolbar-group":"components-toolbar",className);let controlSets;return controlSets=function isNestedArray(arr){return Array.isArray(arr)&&Array.isArray(arr[0])}(controls)?controls:[controls],isCollapsed?(0,jsx_runtime.jsx)(toolbar_group_collapsed,{label:title,controls:controlSets,className:finalClassName,children,...props}):(0,jsx_runtime.jsxs)(toolbar_group_container,{className:finalClassName,...props,children:[controlSets?.flatMap(((controlSet,indexOfSet)=>controlSet.map(((control,indexOfControl)=>(0,jsx_runtime.jsx)(toolbar_button.Z,{containerClassName:indexOfSet>0&&0===indexOfControl?"has-left-divider":void 0,...control},[indexOfSet,indexOfControl].join()))))),children]})}},"./packages/components/build-module/toolbar/toolbar-item/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ariakit_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/ELXIVOWC.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/warning/build-module/index.js"),_toolbar_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ToolbarItem({children,as:Component,...props},ref){const accessibleToolbarStore=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_toolbar_context__WEBPACK_IMPORTED_MODULE_2__.Z),isRenderProp="function"==typeof children;if(!isRenderProp&&!Component)return!0===globalThis.SCRIPT_DEBUG&&!0===globalThis.SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_3__.Z)("`ToolbarItem` is a generic headless component. You must pass either a `children` prop as a function or an `as` prop as a component. See https://developer.wordpress.org/block-editor/components/toolbar-item/"),null;const allProps={...props,ref,"data-toolbar-item":!0};if(!accessibleToolbarStore)return Component?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...allProps,children}):isRenderProp?children(allProps):null;const render=isRenderProp?children:Component&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{children});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_4__.E,{accessibleWhenDisabled:!0,...allProps,store:accessibleToolbarStore,render})}))},"./packages/components/build-module/v-stack/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>v_stack_component});var context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),hook=__webpack_require__("./packages/components/build-module/h-stack/hook.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const v_stack_component=(0,context_connect.Iq)((function UnconnectedVStack(props,forwardedRef){const vStackProps=function useVStack(props){const{expanded=!1,alignment="stretch",...otherProps}=(0,use_context_system.y)(props,"VStack");return(0,hook.R)({direction:"column",expanded,alignment,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.Z,{...vStackProps,ref:forwardedRef})}),"VStack")},"./packages/compose/build-module/hooks/use-debounced-input/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useDebouncedInput});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-debounce/index.js");function useDebouncedInput(defaultValue=""){const[input,setInput]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),[debouncedInput,setDebouncedState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),setDebouncedInput=(0,_use_debounce__WEBPACK_IMPORTED_MODULE_1__.Z)(setDebouncedState,250);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setDebouncedInput(input)}),[input,setDebouncedInput]),[input,setInput,debouncedInput]}},"./packages/dom/build-module/dom/get-computed-style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getComputedStyle});var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/utils/assert-is-defined.js");function getComputedStyle(element){return(0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.c)(element.ownerDocument.defaultView,"element.ownerDocument.defaultView"),element.ownerDocument.defaultView.getComputedStyle(element)}},"./packages/dom/build-module/dom/get-scroll-container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getScrollContainer});var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/dom/get-computed-style.js");function getScrollContainer(node,direction="vertical"){if(node){if(("vertical"===direction||"all"===direction)&&node.scrollHeight>node.clientHeight){const{overflowY}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowY))return node}if(("horizontal"===direction||"all"===direction)&&node.scrollWidth>node.clientWidth){const{overflowX}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowX))return node}return node.ownerDocument===node.parentNode?node:getScrollContainer(node.parentNode,direction)}}},"./packages/element/build-module/create-interpolate-element.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let indoc,offset,output,stack;const tokenizer=/<(\/)?(\w+)\s*(\/)?>/g;function createFrame(element,tokenStart,tokenLength,prevOffset,leadingTextStart){return{element,tokenStart,tokenLength,prevOffset,leadingTextStart,children:[]}}const isValidConversionMap=conversionMap=>{const isObject="object"==typeof conversionMap,values=isObject&&Object.values(conversionMap);return isObject&&values.length&&values.every((element=>(0,_react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)))};function proceed(conversionMap){const next=function nextToken(){const matches=tokenizer.exec(indoc);if(null===matches)return["no-more-tokens"];const startedAt=matches.index,[match,isClosing,name,isSelfClosed]=matches,length=match.length;if(isSelfClosed)return["self-closed",name,startedAt,length];if(isClosing)return["closer",name,startedAt,length];return["opener",name,startedAt,length]}(),[tokenType,name,startOffset,tokenLength]=next,stackDepth=stack.length,leadingTextStart=startOffset>offset?offset:null;if(!conversionMap[name])return addText(),!1;switch(tokenType){case"no-more-tokens":if(0!==stackDepth){const{leadingTextStart:stackLeadingText,tokenStart}=stack.pop();output.push(indoc.substr(stackLeadingText,tokenStart))}return addText(),!1;case"self-closed":return 0===stackDepth?(null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,startOffset-leadingTextStart)),output.push(conversionMap[name]),offset=startOffset+tokenLength,!0):(addChild(createFrame(conversionMap[name],startOffset,tokenLength)),offset=startOffset+tokenLength,!0);case"opener":return stack.push(createFrame(conversionMap[name],startOffset,tokenLength,startOffset+tokenLength,leadingTextStart)),offset=startOffset+tokenLength,!0;case"closer":if(1===stackDepth)return function closeOuterElement(endOffset){const{element,leadingTextStart,prevOffset,tokenStart,children}=stack.pop(),text=endOffset?indoc.substr(prevOffset,endOffset-prevOffset):indoc.substr(prevOffset);text&&children.push(text);null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,tokenStart-leadingTextStart));output.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children))}(startOffset),offset=startOffset+tokenLength,!0;const stackTop=stack.pop(),text=indoc.substr(stackTop.prevOffset,startOffset-stackTop.prevOffset);stackTop.children.push(text),stackTop.prevOffset=startOffset+tokenLength;const frame=createFrame(stackTop.element,stackTop.tokenStart,stackTop.tokenLength,startOffset+tokenLength);return frame.children=stackTop.children,addChild(frame),offset=startOffset+tokenLength,!0;default:return addText(),!1}}function addText(){const length=indoc.length-offset;0!==length&&output.push(indoc.substr(offset,length))}function addChild(frame){const{element,tokenStart,tokenLength,prevOffset,children}=frame,parent=stack[stack.length-1],text=indoc.substr(parent.prevOffset,tokenStart-parent.prevOffset);text&&parent.children.push(text),parent.children.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children)),parent.prevOffset=prevOffset||tokenStart+tokenLength}const __WEBPACK_DEFAULT_EXPORT__=(interpolatedString,conversionMap)=>{if(indoc=interpolatedString,offset=0,output=[],stack=[],tokenizer.lastIndex=0,!isValidConversionMap(conversionMap))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do{}while(proceed(conversionMap));return(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,...output)}},"./packages/icons/build-module/library/arrow-down.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})})},"./packages/icons/build-module/library/arrow-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"./packages/icons/build-module/library/close-small.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"./packages/icons/build-module/library/search.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})})}}]);