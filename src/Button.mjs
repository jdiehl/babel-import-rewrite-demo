import { jsx, jsxs } from "react/jsx-runtime"
import { Component, Fragment } from "react"
import { Platform, View, Text } from "react-native"
import { Icon } from "./components/native/Icon.js"
import { a6 as flatten } from "./290dcc96.js"
import { e as extract } from "./31b94d5b.js"
import { T as Touchable } from "./2b9fbcb3.js"
import "./1e5dfdf3.js"
import "react-native-vector-icons"
import "./components/native/Image.js"
import "react-native-fast-image"
import "react-native-svg"
import "./61f4e940.js"
const isAndroid = "android" === Platform.OS
class Button extends Component { constructor() { super(...arguments), this.onPressHandler = this.onPress.bind(this) } render() { const { name: name, style: style, screenReaderHint: screenReaderHint, screenReaderCaption: screenReaderCaption, accessible: accessible, caption: caption } = this.props, disabled = this.isDisabled(), { container: container, containerDisabled: containerDisabled, containerProps: containerProps } = this.style = function ([buttonStyle]) { const style = flatten([defaultStyle, buttonStyle]), { container: containerStyle, icon: iconStyle, iconDisabled: iconDisabledStyle, ...others } = style, [containerProps, container] = extract(containerStyle, ["rippleColor", "activeOpacity", "underlayColor"]), [iconProps, icon] = extract(iconStyle, ["size", "color"]), [iconDisabledProps, iconDisabled] = extract(iconDisabledStyle, ["size", "color"])
return { containerProps: containerProps, container: container, iconProps: iconProps, icon: icon, iconDisabledProps: iconDisabledProps, iconDisabled: iconDisabled, ...others } }(style)
return jsx(Touchable, { testID: name, onPress: this.onPressHandler, disabled: disabled, style: disabled ? flatten([container, containerDisabled]) : container, accessible: accessible, accessibilityLabel: screenReaderCaption?.value ? screenReaderCaption.value : caption.value, accessibilityHint: screenReaderHint?.value, importantForAccessibility: accessible ? "auto" : "no-hide-descendants", accessibilityRole: "button", accessibilityState: { disabled: disabled }, ...containerProps, children: isAndroid ? this.renderView() : this.renderContent() }) } renderView() { const { name: name } = this.props, { container: container, containerDisabled: containerDisabled } = this.style, disabled = this.isDisabled(), commonStyle = [container, { overflow: "hidden" }]
return jsx(View, { testID: name, style: disabled ? [...commonStyle, containerDisabled] : commonStyle, children: this.renderContent() }) } renderContent() { return jsxs(Fragment, { children: [this.renderIcon(), this.renderCaption()] }) } renderIcon() { const { name: name, icon: icon, caption: caption } = this.props, { icon: iconStyle, iconDisabled: iconDisabled, iconProps: iconProps, iconDisabledProps: iconDisabledProps } = this.style, margin = { marginRight: caption.value ? 10 : 0 }, disabled = this.isDisabled(), commonStyle = [margin, iconStyle]
return icon ? jsx(View, { testID: `${name}$iconWrapper`, style: disabled ? [...commonStyle, iconDisabled] : commonStyle, pointerEvents: "none", children: jsx(Icon, { icon: icon.value, name: `${name}$icon`, ...iconProps, ...disabled ? iconDisabledProps : {} }) }) : null } renderCaption() { const { name: name, caption: caption, accessible: accessible } = this.props, { caption: captionStyle, captionDisabled: captionDisabled } = this.style, disabled = this.isDisabled()
return jsx(Text, { testID: `${name}$caption`, style: disabled ? [captionStyle, captionDisabled] : captionStyle, accessible: accessible, children: caption.value ?? "" }) } isDisabled() { const { onClick: onClick } = this.props
return !!onClick && (onClick.disabledDuringExecution && onClick.isExecuting || !onClick.canExecute) } onPress() { this.isDisabled() || this.props.onClick?.execute() } } const defaultStyle = { container: { rippleColor: "rgba(0, 0, 0, 0.2)", flexDirection: "row" }, icon: { size: 12, flexDirection: "row", alignItems: "center" } }
export { Button }
