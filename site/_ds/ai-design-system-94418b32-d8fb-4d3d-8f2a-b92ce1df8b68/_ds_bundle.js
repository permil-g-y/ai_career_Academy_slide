/* @ds-bundle: {"format":4,"namespace":"AIDesignSystem_94418b","components":[{"name":"AiPanel","sourcePath":"components/core/AiPanel.jsx"},{"name":"AiTag","sourcePath":"components/core/AiTag.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CircleButton","sourcePath":"components/core/CircleButton.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"MediaFrame","sourcePath":"components/core/MediaFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"StepIndicator","sourcePath":"components/navigation/StepIndicator.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/AiPanel.jsx":"6146047fd604","components/core/AiTag.jsx":"318f760cebfe","components/core/ArrowLink.jsx":"8a3d2a2237de","components/core/Badge.jsx":"779557d024d5","components/core/Button.jsx":"caaeb197f92e","components/core/Card.jsx":"b64df8f0776e","components/core/CircleButton.jsx":"8de6013bd7db","components/core/Eyebrow.jsx":"dfc95a4baf44","components/core/Icon.jsx":"91192351a44a","components/core/MediaFrame.jsx":"9e06b11f34c6","components/core/SectionHeading.jsx":"20f6a9345f64","components/core/Stat.jsx":"d38f8f9ffdef","components/core/Tag.jsx":"6e64497f869c","components/feedback/Dialog.jsx":"47f4cb7ffd4b","components/feedback/ProgressBar.jsx":"9ee76e62ed34","components/feedback/Toast.jsx":"4cfc8309d1d5","components/feedback/Tooltip.jsx":"a86e5f8be825","components/forms/Checkbox.jsx":"37975e545268","components/forms/Field.jsx":"fa1704841948","components/forms/Input.jsx":"fb5f952d7569","components/forms/Radio.jsx":"33311794f6b5","components/forms/Select.jsx":"3fe4e818ca52","components/forms/Switch.jsx":"873ecf9e0305","components/forms/Textarea.jsx":"1b9c33a36d7c","components/navigation/StepIndicator.jsx":"3277ddba6976","components/navigation/Tabs.jsx":"e95e2202b3c3","ui_kits/app/AppChrome.jsx":"a253772ab524","ui_kits/app/DashboardScreen.jsx":"47c125943dbb","ui_kits/app/EsEditorScreen.jsx":"8597a2f8a02d","ui_kits/app/InterviewScreen.jsx":"f15340e2635f","ui_kits/app/JobsScreen.jsx":"b0b5c832e6de","ui_kits/website/ApplyScreen.jsx":"06dd42a31947","ui_kits/website/HomeScreen.jsx":"64eb49e9a51f","ui_kits/website/ServiceScreen.jsx":"d67298270728","ui_kits/website/SiteChrome.jsx":"cf03c70e26b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AIDesignSystem_94418b = window.AIDesignSystem_94418b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--neutral-100)",
    color: "var(--neutral-700)"
  },
  brand: {
    background: "var(--surface-brand-soft)",
    color: "var(--blue-700)"
  },
  accent: {
    background: "var(--mint-50)",
    color: "var(--mint-700)"
  },
  success: {
    background: "var(--status-success-soft)",
    color: "var(--status-success)"
  },
  warning: {
    background: "var(--status-warning-soft)",
    color: "var(--status-warning)"
  },
  danger: {
    background: "var(--status-danger-soft)",
    color: "var(--status-danger)"
  },
  inverse: {
    background: "rgba(255,255,255,.14)",
    color: "var(--neutral-0)"
  }
};

/** Small status marker. Use `outline` for filter chips, filled for states. */
function Badge({
  children,
  tone = "neutral",
  outline = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      lineHeight: 1,
      background: outline ? "transparent" : t.background,
      color: t.color,
      border: outline ? "1px solid currentColor" : "1px solid transparent",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline-bordered surface. Elevation is opt-in; the default card is flat and square. */
function Card({
  children,
  interactive = false,
  padding = 28,
  tone = "default",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-body)"
    },
    paper: {
      background: "var(--surface-paper)",
      border: "1px solid var(--sand-200)",
      color: "var(--text-body)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "1px solid var(--border-inverse)",
      color: "rgba(255,255,255,.8)"
    },
    accent: {
      background: "var(--surface-accent-soft)",
      border: "1px solid var(--mint-100)",
      color: "var(--text-body)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard)",
      ...tones[tone],
      ...(interactive ? {
        cursor: "pointer",
        boxShadow: hover ? "var(--shadow-md)" : "none",
        transform: hover ? "translateY(-3px)" : "none"
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase Latin label that sits above a Japanese heading. A core brand signature. */
function Eyebrow({
  children,
  tone = "muted",
  index,
  style,
  ...rest
}) {
  const color = {
    muted: "var(--text-muted)",
    ink: "var(--text-strong)",
    accent: "var(--text-accent)",
    inverse: "rgba(255,255,255,.72)"
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 10,
      color,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      ...style
    }
  }), children, index ? /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 8,
      fontFamily: "var(--font-mono)",
      opacity: 0.7
    }
  }, index) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://unpkg.com/lucide-static@0.454.0/icons/";

/** Lucide (MIT) glyph rendered as a currentColor mask — keeps stroke icons tintable. */
function Icon({
  name = "arrow-right",
  size = 20,
  strokeAlign = "center",
  style,
  ...rest
}) {
  const url = `${BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "none",
      backgroundColor: "currentColor",
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/AiTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Marks AI-generated content. Mint dot + uppercase label — never used for human-written copy. */
function AiTag({
  label = "AI GENERATED",
  tone = "soft",
  style,
  ...rest
}) {
  const soft = tone === "soft";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      background: soft ? "var(--mint-50)" : "var(--mint-400)",
      color: soft ? "var(--mint-700)" : "var(--ink-900)",
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 12
  }), label);
}
Object.assign(__ds_scope, { AiTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AiTag.jsx", error: String((e && e.message) || e) }); }

// components/core/AiPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AI feedback surface: mint hairline, soft mint field, AI tag in the corner. */
function AiPanel({
  title,
  children,
  label = "AI FEEDBACK",
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: "var(--surface-accent-soft)",
      border: "1px solid var(--mint-100)",
      borderRadius: "var(--radius-sm)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)"
    }
  }, title) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(__ds_scope.AiTag, {
    label: label
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.95,
      color: "var(--text-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      paddingTop: 4
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { AiPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AiPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text link with a trailing rule and arrow — used for section-level navigation. */
function ArrowLink({
  children,
  href = "#",
  tone = "ink",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === "inverse" ? "var(--neutral-0)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      color,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--size-eyebrow)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      textDecoration: "none",
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 1,
      width: hover ? 48 : 32,
      background: "currentColor",
      opacity: 0.5,
      transition: "width var(--dur-base) var(--ease-out-soft)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  })));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "0 18px",
    height: 36,
    fontSize: 12
  },
  md: {
    padding: "0 26px",
    height: 46,
    fontSize: 13
  },
  lg: {
    padding: "0 34px",
    height: 56,
    fontSize: 14
  }
};
const variants = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--text-inverse)",
    border: "1px solid var(--action-primary)"
  },
  ink: {
    background: "var(--action-ink)",
    color: "var(--text-inverse)",
    border: "1px solid var(--action-ink)"
  },
  accent: {
    background: "var(--action-accent)",
    color: "var(--ink-900)",
    border: "1px solid var(--action-accent)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "var(--neutral-0)",
    color: "var(--ink-900)",
    border: "1px solid var(--neutral-0)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-hover)",
    borderColor: "var(--action-primary-hover)"
  },
  ink: {
    background: "var(--action-ink-hover)",
    borderColor: "var(--action-ink-hover)"
  },
  accent: {
    background: "var(--action-accent-hover)",
    borderColor: "var(--action-accent-hover)"
  },
  outline: {
    background: "var(--surface-subtle)",
    borderColor: "var(--ink-800)"
  },
  ghost: {
    background: "var(--surface-subtle)"
  },
  inverse: {
    background: "var(--neutral-100)",
    borderColor: "var(--neutral-100)"
  }
};

/** Primary call to action. Latin label, wide tracking, square-ish corners. */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const base = variants[variant] || variants.primary;
  const hov = !disabled && hover ? hovers[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      lineHeight: 1,
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "var(--transition-control), transform var(--dur-instant) var(--ease-standard)",
      transform: press && !disabled ? "translateY(1px)" : "none",
      ...sizes[size],
      ...base,
      ...(hov || {}),
      ...(disabled ? {
        background: "var(--action-disabled)",
        color: "var(--action-disabled-text)",
        borderColor: "var(--action-disabled)"
      } : null),
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === "lg" ? 18 : 16
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === "lg" ? 18 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CircleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular hairline icon button — the brand's signature "read more" affordance. */
function CircleButton({
  icon = "arrow-right",
  size = 48,
  tone = "ink",
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const inverse = tone === "inverse";
  const fill = hover ? inverse ? "var(--neutral-0)" : "var(--ink-800)" : "transparent";
  const fg = hover ? inverse ? "var(--ink-900)" : "var(--neutral-0)" : inverse ? "var(--neutral-0)" : "var(--ink-800)";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-strong)"}`,
      background: fill,
      color: fg,
      cursor: "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.36),
    style: {
      transform: hover ? "translateX(2px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out-soft)"
    }
  }));
}
Object.assign(__ds_scope, { CircleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CircleButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photographic block with the brand scrim and optional overlay content. */
function MediaFrame({
  src,
  alt = "",
  ratio = "16 / 9",
  scrim = "card",
  overlay,
  children,
  style,
  ...rest
}) {
  const bg = scrim === "hero" ? "var(--scrim-hero)" : scrim === "none" ? "none" : "var(--scrim-card)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: ratio,
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-media)",
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--neutral-100)",
      color: "var(--text-faint)",
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Image"), bg !== "none" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: bg
    }
  }) : null, overlay || children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 28,
      color: "var(--neutral-0)"
    }
  }, overlay, children) : null);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + Japanese headline + optional lede, in the brand's editorial stack. */
function SectionHeading({
  eyebrow,
  index,
  title,
  lede,
  align = "left",
  tone = "default",
  size = "md",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  const titleSize = size === "lg" ? "var(--size-h1)" : size === "sm" ? "var(--size-h3)" : "var(--size-h2)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? "inverse" : "muted",
    index: index
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: titleSize,
      lineHeight: "var(--lh-h2)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-jp-heading)",
      color: inverse ? "var(--text-inverse)" : "var(--text-strong)"
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure)",
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      fontWeight: "var(--weight-light)",
      color: inverse ? "rgba(255,255,255,.78)" : "var(--text-muted)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big numeral + Japanese caption. Figures are set in the mono face. */
function Stat({
  value,
  unit,
  label,
  tone = "default",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-medium)",
      color: inverse ? "var(--text-inverse)" : "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: "-.03em"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      opacity: 0.7
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--tracking-jp-body)",
      color: inverse ? "rgba(255,255,255,.65)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable tag / filter chip. Controlled via `selected` + `onClick`. */
function Tag({
  children,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: 34,
      padding: "0 16px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      letterSpacing: "var(--tracking-jp-body)",
      cursor: "pointer",
      transition: "var(--transition-control)",
      background: selected ? "var(--ink-800)" : hover ? "var(--surface-subtle)" : "transparent",
      color: selected ? "var(--text-inverse)" : "var(--text-body)",
      border: `1px solid ${selected ? "var(--ink-800)" : "var(--border-hairline)"}`,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centered modal over a deep ink scrim. Renders only when `open`. */
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--glass-dark)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true"
  }, rest, {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-lg)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-h3)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-jp-heading)",
      color: "var(--text-strong)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.9,
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 4,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin determinate progress bar. Use `tone="accent"` for AI-generated progress. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "brand",
  showValue = false,
  label,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    brand: "var(--action-primary)",
    accent: "var(--action-accent)",
    ink: "var(--ink-800)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%",
      ...style
    }
  }), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)"
    }
  }, label), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, Math.round(pct), "%") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      width: "100%",
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: fill,
      borderRadius: "var(--radius-pill)",
      transition: "width var(--dur-slow) var(--ease-out-soft)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    icon: "info",
    color: "var(--status-info)"
  },
  success: {
    icon: "check-circle",
    color: "var(--status-success)"
  },
  warning: {
    icon: "triangle-alert",
    color: "var(--status-warning)"
  },
  danger: {
    icon: "octagon-alert",
    color: "var(--status-danger)"
  }
};

/** Transient confirmation, anchored bottom-right in app surfaces. */
function Toast({
  tone = "info",
  title,
  description,
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: "16px 18px",
      background: "var(--surface-inverse)",
      color: "var(--neutral-0)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    style: {
      color: t.color,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-caption)",
      lineHeight: 1.7,
      color: "rgba(255,255,255,.68)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "rgba(255,255,255,.6)",
      padding: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover tooltip on a dark chip. Wraps its trigger children. */
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      padding: "6px 10px",
      whiteSpace: "nowrap",
      background: "var(--ink-900)",
      color: "var(--neutral-0)",
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-caption)",
      borderRadius: "var(--radius-xs)",
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--dur-fast) var(--ease-standard)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with a Japanese label. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${checked ? "var(--action-primary)" : "var(--border-strong)"}`,
      background: checked ? "var(--action-primary)" : "var(--surface-card)",
      color: "var(--neutral-0)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control wrapper with help/error text. Wraps any form primitive. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-jp-body)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger)",
      fontSize: 11
    }
  }, "\u5FC5\u9808") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-caption)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: "100%",
  fontFamily: "var(--font-jp)",
  fontSize: "var(--size-body)",
  letterSpacing: "var(--tracking-jp-body)",
  color: "var(--text-body)",
  background: disabled ? "var(--surface-subtle)" : "var(--surface-card)",
  border: `1px solid ${invalid ? "var(--status-danger)" : focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
  borderRadius: "var(--radius-control)",
  boxShadow: focus ? "var(--shadow-focus)" : "none",
  outline: "none",
  transition: "var(--transition-control)"
});

/** Single-line text input. */
function Input({
  invalid = false,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...shell(focus, invalid, disabled),
      height: size === "lg" ? 54 : 46,
      padding: "0 14px",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular radio with a Japanese label. Group them with a shared `name`. */
function Radio({
  label,
  checked = false,
  onChange,
  name,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-name": name,
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 18,
      height: 18,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${checked ? "var(--action-primary)" : "var(--border-strong)"}`,
      background: "var(--surface-card)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--action-primary)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with the brand's chevron and hairline shell. */
function Select({
  options = [],
  invalid = false,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: 46,
      padding: "0 40px 0 14px",
      appearance: "none",
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body)",
      color: "var(--text-body)",
      background: disabled ? "var(--surface-subtle)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--status-danger)" : focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      transition: "var(--transition-control)"
    }
  }), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Binary toggle for settings and notification preferences. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      flex: "none",
      padding: 3,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--action-primary)" : "var(--neutral-300)",
      transition: "background-color var(--dur-base) var(--ease-standard)",
      display: "inline-flex",
      justifyContent: checked ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--neutral-0)",
      boxShadow: "var(--shadow-sm)",
      transition: "transform var(--dur-base) var(--ease-out-soft)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input — ES 入力, 志望動機ドラフトなど. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "12px 14px",
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-body)",
      lineHeight: 1.9,
      letterSpacing: "var(--tracking-jp-body)",
      color: "var(--text-body)",
      background: disabled ? "var(--surface-subtle)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--status-danger)" : focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      resize: "vertical",
      transition: "var(--transition-control)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered progress rail for multi-step flows (診断・ES作成・面接練習). */
function StepIndicator({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({}, rest, {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: 0,
      ...style
    }
  }), steps.map((s, i) => {
    const done = i < current;
    const on = i === current;
    return /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flex: i === steps.length - 1 ? "none" : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        background: done ? "var(--action-accent)" : on ? "var(--ink-800)" : "transparent",
        color: done ? "var(--ink-900)" : on ? "var(--neutral-0)" : "var(--text-faint)",
        border: `1px solid ${done ? "var(--action-accent)" : on ? "var(--ink-800)" : "var(--border-strong)"}`,
        transition: "var(--transition-control)"
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-jp)",
        fontSize: "var(--size-body-sm)",
        whiteSpace: "nowrap",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)"
      }
    }, s), i === steps.length - 1 ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hairline)",
        margin: "0 16px"
      }
    }));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlined tab bar. Controlled: pass `value` + `onChange`. */
function Tabs({
  tabs = [],
  value,
  onChange,
  tone = "default",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  const active = value ?? (tabs[0] && (tabs[0].value ?? tabs[0]));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      gap: 28,
      borderBottom: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-hairline)"}`,
      ...style
    }
  }), tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => onChange && onChange(v),
      style: {
        position: "relative",
        padding: "0 0 14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-jp)",
        fontSize: "var(--size-body-sm)",
        fontWeight: on ? "var(--weight-bold)" : "var(--weight-regular)",
        letterSpacing: "var(--tracking-jp-body)",
        color: on ? inverse ? "var(--neutral-0)" : "var(--text-strong)" : inverse ? "rgba(255,255,255,.6)" : "var(--text-muted)",
        transition: "var(--transition-control)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? inverse ? "var(--neutral-0)" : "var(--ink-800)" : "transparent",
        transition: "background-color var(--dur-base) var(--ease-standard)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppChrome.jsx
try { (() => {
const {
  Icon,
  Badge,
  Eyebrow,
  ProgressBar,
  Button,
  Tooltip
} = window.AIDesignSystem_94418b;
const NAV_ITEMS = [{
  id: "dashboard",
  label: "ダッシュボード",
  icon: "layout-dashboard"
}, {
  id: "es",
  label: "ES添削",
  icon: "file-text"
}, {
  id: "interview",
  label: "面接練習",
  icon: "mic"
}, {
  id: "jobs",
  label: "求人を探す",
  icon: "search"
}];
function AppSidebar({
  route,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--surface-inverse-deep)",
      color: "var(--neutral-0)",
      display: "flex",
      flexDirection: "column",
      padding: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: ".02em"
    }
  }, "AI\u5C31\u6D3B\u30D7\u30ED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 8,
      letterSpacing: ".28em",
      opacity: 0.5,
      marginTop: 5
    }
  }, "DESIGN YOUR CAREER")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "0 12px"
    }
  }, NAV_ITEMS.map(n => {
    const on = route === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 44,
        padding: "0 12px",
        background: on ? "rgba(255,255,255,.08)" : "transparent",
        border: "none",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        color: on ? "var(--neutral-0)" : "rgba(255,255,255,.6)",
        fontFamily: "var(--font-jp)",
        fontSize: 13,
        fontWeight: on ? 500 : 400,
        textAlign: "left",
        transition: "var(--transition-control)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 17
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "PROFILE"), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "accent",
    value: 72,
    showValue: true,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,.75)",
        fontSize: 12
      }
    }, "\u5B8C\u6210\u5EA6")
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 11,
      lineHeight: 1.8,
      color: "rgba(255,255,255,.5)"
    }
  }, "\u30AC\u30AF\u30C1\u30AB\u3092\u767B\u9332\u3059\u308B\u3068\u3001\u30B9\u30AB\u30A6\u30C8\u7387\u304C\u4E0A\u304C\u308A\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      background: "var(--ink-600)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "Y"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12
    }
  }, "\u5C71\u7530 \u592A\u90CE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 10,
      color: "rgba(255,255,255,.45)"
    }
  }, "\u5B66\u90E83\u5E74")))));
}
const TITLES = {
  dashboard: "ダッシュボード",
  es: "ES添削",
  interview: "面接練習",
  jobs: "求人を探す"
};
function AppTopbar({
  route
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      flex: "none",
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "var(--tracking-jp-heading)",
      color: "var(--text-strong)"
    }
  }, TITLES[route]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-faint)"
    }
  }, "2026.08.13")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "\u304A\u77E5\u3089\u305B"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    style: {
      color: "var(--text-muted)"
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "\u8A2D\u5B9A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18,
    style: {
      color: "var(--text-muted)"
    }
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u8A3A\u65AD\u7D50\u679C \u66F4\u65B0")));
}
Object.assign(window, {
  AppSidebar,
  AppTopbar,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Stat,
  Eyebrow,
  Button,
  CircleButton,
  ProgressBar,
  AiPanel,
  AiTag,
  StepIndicator,
  Icon,
  Tabs
} = window.AIDesignSystem_94418b;
const Page = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 1180
  }
}, children);
function DashboardScreen({
  onNav
}) {
  const [tab, setTab] = React.useState("直近のタスク");
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    tone: "inverse",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "TODAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 24,
      fontWeight: 700,
      color: "var(--neutral-0)",
      letterSpacing: "var(--tracking-jp-heading)"
    }
  }, "\u6B21\u306F\u300C\u9762\u63A5\u7DF4\u7FD2\u30FB\u7B2C2\u56DE\u300D\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "rgba(255,255,255,.6)"
    }
  }, "\u6240\u8981 15\u5206 \uFF0F \u524D\u56DE\u30B9\u30B3\u30A2 74\u70B9")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNav("interview")
  }, "\u306F\u3058\u3081\u308B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, [["応募中", "6", "社"], ["選考中", "3", "社"], ["ES下書き", "4", "件"], ["面接練習", "12", "回"]].map(([l, v, u]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: 24
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    unit: u,
    label: l
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["直近のタスク", "選考スケジュール"],
    value: tab,
    onChange: setTab
  }), tab === "直近のタスク" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, [["8/14", "株式会社ミナトデータ", "ES提出", "danger", "締切まで1日"], ["8/16", "セイワ製作所", "一次面接", "warning", "準備中"], ["8/19", "カナメコンサルティング", "ES添削の反映", "brand", "AI指摘 3件"], ["8/22", "ノースリンク", "適性検査", "neutral", "未着手"]].map(([d, c, t, tone, note]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: "grid",
      gridTemplateColumns: "60px 1fr 130px 110px",
      alignItems: "center",
      gap: 16,
      padding: "16px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      color: "var(--text-strong)",
      fontWeight: 500
    }
  }, c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, note)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: ["書類選考", "一次面接", "二次面接", "最終", "内定"],
    current: 1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "\u682A\u5F0F\u4F1A\u793E\u30DF\u30CA\u30C8\u30C7\u30FC\u30BF \uFF0F \u6B21\u56DE 8\u670816\u65E5\uFF08\u571F\uFF0914:00 \u30AA\u30F3\u30E9\u30A4\u30F3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AiPanel, {
    title: "\u4ECA\u9031\u306E\u30A2\u30C9\u30D0\u30A4\u30B9",
    label: "AI COACH",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      onClick: () => onNav("es")
    }, "ES\u3092\u958B\u304F")
  }, "\u63D0\u51FA\u6E08\u307FES 4\u4EF6\u306E\u3046\u30613\u4EF6\u3067\u3001\u7D50\u8AD6\u304C\u5F8C\u534A\u306B\u7F6E\u304B\u308C\u3066\u3044\u307E\u3059\u3002\u5192\u982D1\u6587\u76EE\u306B\u7D50\u8AD6\u3092\u7F6E\u304F\u578B\u3067\u3001\u307E\u305A1\u4EF6\u3060\u3051\u66F8\u304D\u76F4\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002"), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "PROGRESS"), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "AI\u57FA\u790E\u8B1B\u5EA7",
    value: 62,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\u9069\u6027\u8A3A\u65AD\u306E\u518D\u53D7\u9A13\u307E\u3067",
    value: 30,
    showValue: true,
    tone: "ink"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u5B8C\u6210\u5EA6",
    value: 72,
    showValue: true,
    tone: "accent"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "SCOUT"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "\u65B0\u7740 2")), ["株式会社ミナトデータ", "ノースリンク株式会社"].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, c), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      color: "var(--text-faint)"
    }
  })))))));
}
Object.assign(window, {
  DashboardScreen,
  Page
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EsEditorScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Eyebrow,
  Field,
  Textarea,
  Select,
  AiPanel,
  AiTag,
  ProgressBar,
  Icon,
  Toast,
  Dialog,
  Tag
} = window.AIDesignSystem_94418b;
function EsEditorScreen() {
  const [text, setText] = React.useState("私は大学時代、テニスサークルの運営に力を入れました。人数が減っていたので、SNSでの発信を増やしました。その結果、新入部員が増え、活動が活発になりました。");
  const [saved, setSaved] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const notes = [["結論の位置", "「新入部員を1.8倍にした」が最後にあります。1文目に置きましょう。", "danger"], ["具体性", "施策がSNS発信のみです。頻度・期間・役割分担を足すと再現性が伝わります。", "warning"], ["語尾", "「〜しました」が4文続きます。1文を体言止めにするとリズムが出ます。", "neutral"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: 260
    },
    options: ["株式会社ミナトデータ / ガクチカ", "セイワ製作所 / 志望動機", "ノースリンク / 自己PR"]
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "\u7DE0\u5207\u307E\u30671\u65E5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setConfirm(true)
  }, "\u63D0\u51FA\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: "save",
    onClick: () => setSaved(true)
  }, "\u4E0B\u66F8\u304D\u4FDD\u5B58"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "QUESTION 01"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, text.length, " / 400\u5B57")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-jp-heading)"
    }
  }, "\u5B66\u751F\u6642\u4EE3\u306B\u6700\u3082\u529B\u3092\u5165\u308C\u305F\u3053\u3068\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 14,
    value: text,
    onChange: e => setText(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "\u30AC\u30AF\u30C1\u30AB"), /*#__PURE__*/React.createElement(Tag, null, "\u81EA\u5DF1PR"), /*#__PURE__*/React.createElement(Tag, null, "\u5FD7\u671B\u52D5\u6A5F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "SCORE"), /*#__PURE__*/React.createElement(AiTag, {
    label: "AI SCORING"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      fontFamily: "var(--font-mono)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 46,
      letterSpacing: "-.03em"
    }
  }, "68"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      opacity: .6
    }
  }, "/ 100")), [["結論の明確さ", 52], ["具体性", 64], ["再現性", 71], ["文章のリズム", 84]].map(([l, v]) => /*#__PURE__*/React.createElement(ProgressBar, {
    key: l,
    label: l,
    value: v,
    showValue: true,
    tone: "accent"
  }))), /*#__PURE__*/React.createElement(AiPanel, {
    title: "\u6DFB\u524A\u30B3\u30E1\u30F3\u30C8\uFF083\u4EF6\uFF09",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm"
    }, "\u3059\u3079\u3066\u53CD\u6620"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "\u5374\u4E0B"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, notes.map(([t, d, tone]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12,
      lineHeight: 1.9
    }
  }, d))))), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16,
    style: {
      color: "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 11,
      lineHeight: 1.8,
      color: "var(--text-muted)"
    }
  }, "AI\u306E\u6307\u6458\u306F\u63D0\u6848\u3067\u3059\u3002\u63D0\u51FA\u3059\u308B\u6587\u7AE0\u306F\u5FC5\u305A\u3054\u81EA\u8EAB\u306E\u8A00\u8449\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "\u3053\u306EES\u3092\u63D0\u51FA\u3057\u307E\u3059\u304B\uFF1F",
    description: "\u63D0\u51FA\u5F8C\u306F\u4F01\u696D\u5074\u3067\u9078\u8003\u304C\u958B\u59CB\u3055\u308C\u3001\u5185\u5BB9\u306E\u7DE8\u96C6\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setConfirm(false)
    }, "\u623B\u308B"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => {
        setConfirm(false);
        setSaved(true);
      }
    }, "\u63D0\u51FA\u3059\u308B"))
  }), saved ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 28,
      bottom: 28,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\u4E0B\u66F8\u304D\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F",
    description: "\u30DE\u30A4\u30DA\u30FC\u30B8\u304B\u3089\u3044\u3064\u3067\u3082\u518D\u7DE8\u96C6\u3067\u304D\u307E\u3059",
    onClose: () => setSaved(false)
  })) : null);
}
Object.assign(window, {
  EsEditorScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EsEditorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/InterviewScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Eyebrow,
  StepIndicator,
  AiPanel,
  AiTag,
  ProgressBar,
  Icon,
  Stat,
  Tabs,
  CircleButton
} = window.AIDesignSystem_94418b;
function InterviewScreen() {
  const [state, setState] = React.useState("idle"); // idle | recording | result
  const questions = ["自己紹介を1分でお願いします。", "学生時代に力を入れたことは？", "なぜこの業界を志望していますか？"];
  const [qi, setQi] = React.useState(1);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: ["準備", "回答", "採点", "振り返り"],
    current: state === "idle" ? 0 : state === "recording" ? 1 : 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      background: "var(--ink-800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--neutral-500)",
      opacity: .28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      color: "var(--neutral-0)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "QUESTION ", String(qi + 1).padStart(2, "0"), " / 05"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "var(--tracking-jp-heading)",
      maxWidth: 460,
      lineHeight: 1.7
    }
  }, questions[qi]), state === "recording" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--mint-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--mint-300)"
    }
  }), "REC 00:42") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 20,
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "rgba(255,255,255,.6)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".18em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mic",
    size: 14
  }), "AUDIO ONLY")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CircleButton, {
    icon: "arrow-left",
    size: 40,
    label: "\u524D\u306E\u8CEA\u554F",
    onClick: () => setQi(Math.max(0, qi - 1))
  }), /*#__PURE__*/React.createElement(CircleButton, {
    icon: "arrow-right",
    size: 40,
    label: "\u6B21\u306E\u8CEA\u554F",
    onClick: () => setQi(Math.min(questions.length - 1, qi + 1))
  })), state === "recording" ? /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    iconLeft: "square",
    onClick: () => setState("result")
  }, "\u56DE\u7B54\u3092\u7D42\u3048\u308B") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "mic",
    onClick: () => setState("recording")
  }, state === "result" ? "もう一度回答する" : "回答をはじめる"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, state === "result" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "SCORE"), /*#__PURE__*/React.createElement(AiTag, {
    label: "AI SCORING"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "82",
    unit: "\u70B9",
    label: "\u7DCF\u5408\u30B9\u30B3\u30A2\uFF08\u524D\u56DE 74\uFF09"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1:12",
    label: "\u56DE\u7B54\u6642\u9593\uFF08\u76EE\u5B89 1:00\uFF09"
  })), [["結論の位置", 88], ["具体性", 74], ["話す速度", 91], ["言い淀み", 63]].map(([l, v]) => /*#__PURE__*/React.createElement(ProgressBar, {
    key: l,
    label: l,
    value: v,
    showValue: true,
    tone: "accent"
  }))), /*#__PURE__*/React.createElement(AiPanel, {
    title: "\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm"
    }, "\u3053\u306E\u6307\u6458\u3067\u518D\u6311\u6226")
  }, "\u7D50\u8AD6\u306F\u5192\u982D\u306B\u7F6E\u3051\u3066\u3044\u307E\u3059\u3002\u4E00\u65B9\u3067\u300C\u3048\u30FC\u300D\u304C7\u56DE\u3042\u308A\u3001\u5F8C\u534A\u3067\u901F\u5EA6\u304C\u843D\u3061\u307E\u3057\u305F\u3002\u6570\u5B57\u30921\u3064\u306B\u7D5E\u308B\u3068\u3001\u9593\u3092\u53D6\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "CHECKLIST"), ["静かな場所にいますか", "マイクは有効ですか", "1分を目安に話しますか"].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      color: "var(--text-accent)"
    }
  }), c))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "HISTORY"), [["8/09", "74点"], ["8/02", "69点"], ["7/26", "61点"]].map(([d, s]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)",
      paddingBottom: 8,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, s))))))));
}
Object.assign(window, {
  InterviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/InterviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/JobsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Button,
  Eyebrow,
  Field,
  Input,
  Select,
  Checkbox,
  MediaFrame,
  Icon,
  AiTag,
  Tabs
} = window.AIDesignSystem_94418b;
const JOBS = [{
  c: "株式会社ミナトデータ",
  t: "データアナリスト（新卒）",
  area: "東京・渋谷",
  tags: ["IT・通信", "AI活用"],
  match: 92,
  note: "スカウト受信"
}, {
  c: "セイワ製作所",
  t: "生産技術エンジニア",
  area: "愛知・刈谷",
  tags: ["メーカー"],
  match: 84,
  note: "締切 8/20"
}, {
  c: "カナメコンサルティング",
  t: "ビジネスコンサルタント",
  area: "東京・丸の内",
  tags: ["コンサル"],
  match: 78,
  note: ""
}, {
  c: "ノースリンク株式会社",
  t: "総合職（営業）",
  area: "大阪・梅田",
  tags: ["商社"],
  match: 71,
  note: ""
}];
function JobsScreen() {
  const [tab, setTab] = React.useState("おすすめ");
  const [sel, setSel] = React.useState("IT・通信");
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-end",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u30AD\u30FC\u30EF\u30FC\u30C9",
    style: {
      flex: 2,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8077\u7A2E\u30FB\u4F01\u696D\u540D\u3067\u691C\u7D22"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u696D\u754C",
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u3059\u3079\u3066",
    options: ["IT・通信", "メーカー", "商社", "金融", "コンサル"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u52E4\u52D9\u5730",
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u3059\u3079\u3066",
    options: ["東京", "大阪", "愛知", "福岡"]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "search",
    style: {
      height: 46
    }
  }, "\u691C\u7D22")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["IT・通信", "メーカー", "商社", "金融", "コンサル", "AI活用", "リモート可"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: sel === t,
    onClick: () => setSel(t)
  }, t))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["おすすめ", "新着", "応募中", "保存済み"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, JOBS.map(j => /*#__PURE__*/React.createElement(Card, {
    key: j.c,
    interactive: true,
    padding: 0,
    style: {
      display: "flex",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    scrim: "none",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, j.c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, j.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      color: "var(--text-strong)"
    }
  }, j.match, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: .6
    }
  }, "%")), /*#__PURE__*/React.createElement(AiTag, {
    label: "AI MATCH"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), j.area), j.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t)), j.note ? /*#__PURE__*/React.createElement(Badge, {
    tone: j.note === "スカウト受信" ? "success" : "warning"
  }, j.note) : null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "WHY THESE JOBS"), /*#__PURE__*/React.createElement(AiTag, {
    label: "AI MATCH"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      lineHeight: 1.95,
      color: "var(--text-body)"
    }
  }, "\u9069\u6027\u8A3A\u65AD\u306E\u300C\u5206\u6790\u5FD7\u5411\u300D\u300C\u7C98\u308A\u5F37\u3055\u300D\u304C\u9AD8\u3044\u305F\u3081\u3001\u30C7\u30FC\u30BF\u8077\u3092\u4E0A\u4F4D\u306B\u51FA\u3057\u3066\u3044\u307E\u3059\u3002\u6761\u4EF6\u3092\u5909\u3048\u308B\u3068\u4E26\u3073\u9806\u3082\u5909\u308F\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u30B9\u30AB\u30A6\u30C8\u3092\u53D7\u3051\u53D6\u308B",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u30EA\u30E2\u30FC\u30C8\u53EF\u306E\u307F\u8868\u793A",
    checked: false,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    tone: "paper",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "SAVED"), ["ミナトデータ / データアナリスト", "セイワ製作所 / 生産技術"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, s, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      color: "var(--text-faint)"
    }
  })))))));
}
Object.assign(window, {
  JobsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/JobsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Eyebrow,
  SectionHeading,
  Field,
  Input,
  Select,
  Checkbox,
  Radio,
  Textarea,
  StepIndicator,
  Toast,
  Icon,
  AiTag
} = window.AIDesignSystem_94418b;
function ApplyScreen({
  onNav
}) {
  const [step, setStep] = React.useState(0);
  const [grade, setGrade] = React.useState("b3");
  const [agree, setAgree] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const steps = ["基本情報", "希望条件", "確認"];
  const next = () => step < 2 ? setStep(step + 1) : setDone(true);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      paddingTop: 78,
      background: "var(--surface-subtle)",
      minHeight: "100vh",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "64px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03"
  }, "APPLY"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "20px 0 0",
      fontFamily: "var(--font-jp)",
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "var(--tracking-jp-heading)",
      color: "var(--text-strong)"
    }
  }, "\u7121\u6599\u767B\u9332"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 44px",
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      lineHeight: 2,
      fontWeight: 300,
      color: "var(--text-muted)"
    }
  }, "\u6240\u89811\u5206\u3002\u767B\u9332\u5F8C\u3059\u3050\u306B\u9069\u6027\u8A3A\u65AD\u3092\u53D7\u3051\u3089\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(StepIndicator, {
    steps: steps,
    current: done ? 3 : step
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 40,
    style: {
      marginTop: 36,
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u6C0F\u540D",
    required: true,
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u30D5\u30EA\u30AC\u30CA",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u30E4\u30DE\u30C0 \u30BF\u30ED\u30A6"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    required: true,
    hint: "\u5927\u5B66\u767A\u884C\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u63A8\u5968\u3057\u307E\u3059"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@university.ac.jp"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u5927\u5B66\u540D",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u3007\u3007\u5927\u5B66"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u5352\u696D\u4E88\u5B9A\u5E74",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    options: ["2027年3月", "2028年3月", "2029年3月"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "\u5B66\u5E74",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      paddingTop: 4
    }
  }, [["b3", "学部3年"], ["b4", "学部4年"], ["m1", "修士1年"]].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "grade",
    label: l,
    checked: grade === v,
    onChange: () => setGrade(v)
  }))))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "\u5FD7\u671B\u696D\u754C",
    required: true,
    hint: "3\u3064\u307E\u3067\u9078\u3079\u307E\u3059"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u696D\u754C\u3092\u9078\u629E",
    options: ["IT・通信", "メーカー", "商社", "金融", "コンサル", "広告・メディア"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u5E0C\u671B\u52E4\u52D9\u5730"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u30A8\u30EA\u30A2\u3092\u9078\u629E",
    options: ["東京", "大阪", "名古屋", "福岡", "リモート可"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u3044\u307E\u56F0\u3063\u3066\u3044\u308B\u3053\u3068",
    hint: "AI\u304C\u6700\u521D\u306E\u8A3A\u65AD\u7D50\u679C\u3092\u3053\u306E\u5185\u5BB9\u306B\u5408\u308F\u305B\u3066\u8ABF\u6574\u3057\u307E\u3059"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 5,
    placeholder: "\u4F8B\uFF1A\u81EA\u5DF1PR\u3067\u4F55\u3092\u66F8\u3051\u3070\u3044\u3044\u304B\u5206\u304B\u3089\u306A\u3044"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      background: "var(--surface-accent-soft)",
      border: "1px solid var(--mint-100)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(AiTag, {
    label: "AI MATCHING"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, "\u5165\u529B\u5185\u5BB9\u3092\u3082\u3068\u306B\u3001\u521D\u56DE\u306E\u8A3A\u65AD\u8A2D\u554F\u3092\u81EA\u52D5\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, [["氏名", "山田 太郎"], ["メールアドレス", "taro@university.ac.jp"], ["大学 / 学年", "〇〇大学 学部3年"], ["志望業界", "IT・通信"], ["希望勤務地", "東京"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 20,
      padding: "16px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, v)))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u5229\u7528\u898F\u7D04\u30FB\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u540C\u610F\u3059\u308B",
    checked: agree,
    onChange: setAgree
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => step === 0 ? onNav("home") : setStep(step - 1)
  }, "\u623B\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    disabled: step === 2 && !agree,
    onClick: next
  }, step === 2 ? "登録して診断へ" : "次へ"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 24,
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 11
    }
  }, "\u5165\u529B\u5185\u5BB9\u306F\u9078\u8003\u4F01\u696D\u306B\u306F\u5171\u6709\u3055\u308C\u307E\u305B\u3093\u3002"))), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 28,
      bottom: 28,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\u767B\u9332\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
    description: "\u9069\u6027\u8A3A\u65AD\uFF08\u7D0410\u5206\uFF09\u306B\u305D\u306E\u307E\u307E\u9032\u3081\u307E\u3059",
    onClose: () => setDone(false)
  })) : null);
}
Object.assign(window, {
  ApplyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  CircleButton,
  ArrowLink,
  Card,
  Badge,
  Tag,
  Stat,
  Eyebrow,
  SectionHeading,
  MediaFrame,
  AiPanel,
  AiTag,
  Icon,
  ProgressBar
} = window.AIDesignSystem_94418b;
const Wrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--page-max)",
    margin: "0 auto",
    padding: "0 40px",
    ...style
  }
}, children);
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 660,
      background: "var(--ink-800)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: `var(--neutral-${i === 1 ? 400 : 300})`,
      opacity: 0.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "AI SKILL \xD7 JOB HUNTING"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "24px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--size-display-1)",
      lineHeight: "var(--lh-display-1)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--neutral-0)"
    }
  }, "DESIGN", /*#__PURE__*/React.createElement("br", null), "YOUR CAREER."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "32px 0 0",
      maxWidth: 460,
      fontFamily: "var(--font-jp)",
      fontSize: 15,
      lineHeight: 2.1,
      fontWeight: "var(--weight-light)",
      color: "rgba(255,255,255,.82)"
    }
  }, "AI\u30B9\u30AD\u30EB\u3092\u8EAB\u306B\u3064\u3051\u306A\u304C\u3089\u3001\u5C31\u8077\u6D3B\u52D5\u3092\u8A2D\u8A08\u3059\u308B\u3002", /*#__PURE__*/React.createElement("br", null), "\u5927\u5B66\u751F\u306E\u305F\u3081\u306E\u3001\u5B66\u3073\u3068\u9078\u8003\u304C\u3064\u306A\u304C\u308B\u30AD\u30E3\u30EA\u30A2\u30B5\u30FC\u30D3\u30B9\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNav("apply")
  }, "\u7121\u6599\u3067\u8A3A\u65AD\u3092\u306F\u3058\u3081\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--neutral-0)",
      border: "1px solid var(--border-inverse)"
    },
    onClick: () => onNav("service")
  }, "\u30B5\u30FC\u30D3\u30B9\u3092\u898B\u308B")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 40,
      bottom: 32,
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "rgba(255,255,255,.6)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".2em"
    }
  }, "SCROLL", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 60,
      height: 1,
      background: "currentColor"
    }
  })));
}
function Philosophy() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, "PHILOSOPHY"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: "var(--size-h1)",
      lineHeight: 1.6,
      fontWeight: 700,
      letterSpacing: "var(--tracking-jp-heading)",
      color: "var(--text-strong)"
    }
  }, "\u5C31\u6D3B\u306F\u3001\u60C5\u5831\u91CF\u3067\u306F\u306A\u304F", /*#__PURE__*/React.createElement("br", null), "\u9806\u756A\u3067\u6C7A\u307E\u308B\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 15,
      lineHeight: 2.15,
      fontWeight: "var(--weight-light)",
      color: "var(--text-body)"
    }
  }, "\u81EA\u5DF1\u5206\u6790\u3001\u696D\u754C\u7814\u7A76\u3001ES\u3001\u9762\u63A5\u3002\u3084\u308B\u3053\u3068\u306F\u77E5\u3063\u3066\u3044\u308B\u306E\u306B\u3001\u3069\u3053\u304B\u3089\u624B\u3092\u3064\u3051\u308B\u304B\u3067\u5DEE\u304C\u3064\u304D\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "AI\u5C31\u6D3B\u30D7\u30ED\u306F\u3001AI\u3092\u300C\u7B54\u3048\u3092\u51FA\u3059\u9053\u5177\u300D\u3067\u306F\u306A\u304F\u300C\u9806\u756A\u3092\u6574\u3048\u308B\u76F8\u68D2\u300D\u3068\u3057\u3066\u8A2D\u8A08\u3057\u307E\u3057\u305F\u3002\u8A3A\u65AD\u3067\u73FE\u5728\u5730\u3092\u51FA\u3057\u3001\u5B66\u3073\u3067\u6B66\u5668\u3092\u5897\u3084\u3057\u3001\u9078\u8003\u3067\u8A66\u3059\u3002\u3053\u306E\u5F80\u5FA9\u3092\u3001\u5728\u5B66\u4E2D\u306B\u4F55\u5EA6\u3067\u3082\u56DE\u305B\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "AI\u304C\u66F8\u3044\u305F\u6587\u7AE0\u306F\u3001\u5FC5\u305AAI\u304C\u66F8\u3044\u305F\u3068\u660E\u793A\u3057\u307E\u3059\u3002\u6700\u5F8C\u306B\u8A00\u8449\u3092\u9078\u3076\u306E\u306F\u3001\u3042\u306A\u305F\u3067\u3059\u3002"), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "READ MORE"))));
}
function Numbers() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-paper)",
      padding: "var(--section-pad-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0
    }
  }, [["12,400", "人", "累計受講者数"], ["98.2", "%", "プログラム継続率"], ["1,240", "社", "提携企業数"], ["3", "分", "ES添削の平均返答時間"]].map(([v, u, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "0 32px",
      borderLeft: i === 0 ? "none" : "1px solid var(--sand-200)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: v,
    unit: u,
    label: l
  })))));
}
function ServiceBlocks({
  onNav
}) {
  const rows = [{
    eyebrow: "FOR STUDENT",
    title: "学生の方へ",
    body: "適性診断・AI講座・ES添削・面接練習・求人紹介まで、すべて無料。",
    index: "01"
  }, {
    eyebrow: "FOR UNIVERSITY",
    title: "大学・企業の方へ",
    body: "キャリアセンター向けの導入支援と、採用担当者向けのマッチング。",
    index: "02"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad-y) 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -20,
      top: 40,
      fontFamily: "var(--font-display)",
      fontSize: 150,
      fontWeight: 800,
      color: "var(--neutral-50)",
      letterSpacing: "-.03em",
      lineHeight: 1,
      pointerEvents: "none"
    }
  }, "SERVICE"), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "SERVICE",
    index: "02",
    title: "\u5B66\u3073\u3068\u9078\u8003\u3092\u3001\u3072\u3068\u3064\u306E\u6D41\u308C\u306B\u3002",
    lede: "AI\u30B9\u30AD\u30EB\u306E\u7FD2\u5F97\u304B\u3089\u5185\u5B9A\u307E\u3067\u3092\u3001\u540C\u3058\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u3067\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002\u5FC5\u8981\u306A\u3068\u304D\u306B\u3001\u5FC5\u8981\u306A\u652F\u63F4\u3060\u3051\u3092\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      marginTop: 64
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      alignItems: "center",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: r.index
  }, r.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "var(--text-strong)"
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      lineHeight: 2,
      fontWeight: 300,
      color: "var(--text-muted)"
    }
  }, r.body), /*#__PURE__*/React.createElement(CircleButton, {
    label: r.title,
    onClick: () => onNav("service"),
    style: {
      marginTop: 12
    }
  })), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "21 / 9",
    scrim: "card"
  }))))));
}
function Curriculum() {
  const items = [{
    n: "01",
    t: "AI適性診断",
    d: "40問・約10分。強みと向いている職種を可視化します。",
    tag: "所要 10分"
  }, {
    n: "02",
    t: "AI基礎講座",
    d: "生成AIの実務での使い方を、8つのワークで身につける。",
    tag: "全8回"
  }, {
    n: "03",
    t: "ES添削",
    d: "書いた文章に対して、構成・具体性・語尾まで指摘。",
    tag: "平均3分"
  }, {
    n: "04",
    t: "面接練習",
    d: "音声で模擬面接。回答の長さと結論位置を採点します。",
    tag: "何度でも"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      padding: "var(--section-pad-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "PROGRAM",
    index: "03",
    title: "4\u3064\u306E\u30B9\u30C6\u30C3\u30D7\u3002"
  }), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "ALL PROGRAMS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
      marginTop: 56
    }
  }, items.map(i => /*#__PURE__*/React.createElement(Card, {
    key: i.n,
    interactive: true,
    padding: 28,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, i.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 19,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-jp-heading)"
    }
  }, i.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      lineHeight: 1.95,
      fontWeight: 300,
      color: "var(--text-muted)"
    }
  }, i.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, i.tag), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      color: "var(--text-faint)"
    }
  })))))));
}
function AiSample() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "HOW IT WORKS",
    index: "04",
    title: "AI\u306F\u3001\u66F8\u304D\u76F4\u3055\u306A\u3044\u3002\u7406\u7531\u3092\u8FD4\u3059\u3002",
    lede: "\u6DFB\u524A\u306F\u300C\u76F4\u3055\u308C\u305F\u6587\u7AE0\u300D\u3067\u306F\u306A\u304F\u300C\u306A\u305C\u5F31\u3044\u306E\u304B\u300D\u3067\u8FD4\u3057\u307E\u3059\u3002\u53CD\u6620\u3059\u308B\u304B\u3069\u3046\u304B\u306F\u3001\u3042\u306A\u305F\u304C\u6C7A\u3081\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      letterSpacing: ".22em",
      color: "var(--text-faint)"
    }
  }, "YOUR DRAFT"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      lineHeight: 2,
      color: "var(--text-body)",
      fontWeight: 300
    }
  }, "\u79C1\u306F\u5927\u5B66\u6642\u4EE3\u3001\u30C6\u30CB\u30B9\u30B5\u30FC\u30AF\u30EB\u306E\u904B\u55B6\u306B\u529B\u3092\u5165\u308C\u307E\u3057\u305F\u3002\u4EBA\u6570\u304C\u6E1B\u3063\u3066\u3044\u305F\u306E\u3067\u3001SNS\u3067\u306E\u767A\u4FE1\u3092\u5897\u3084\u3057\u307E\u3057\u305F\u3002")), /*#__PURE__*/React.createElement(AiPanel, {
    title: "\u6DFB\u524A\u30B3\u30E1\u30F3\u30C8\uFF083\u4EF6\uFF09",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm"
    }, "\u53CD\u6620\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "\u5374\u4E0B"))
  }, "\u7D50\u8AD6\u304C\u6700\u5F8C\u306B\u3042\u308A\u307E\u3059\u3002\u300C\u65B0\u5165\u90E8\u54E1\u30921.8\u500D\u306B\u5897\u3084\u3057\u305F\u300D\u30921\u6587\u76EE\u306B\u7F6E\u304F\u3068\u3001\u8AAD\u307F\u624B\u306E\u7406\u89E3\u304C\u901F\u304F\u306A\u308A\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u6570\u5024\u306E\u6839\u62E0\u304C1\u3064\u3057\u304B\u3042\u308A\u307E\u305B\u3093\u3002\u671F\u9593\u3068\u65BD\u7B56\u6570\u3092\u8DB3\u3059\u3068\u518D\u73FE\u6027\u304C\u4F1D\u308F\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "ES \u5B8C\u6210\u5EA6",
    tone: "accent",
    value: 68,
    showValue: true
  }))));
}
function Voices() {
  const people = [{
    q: "自己分析に3ヶ月かけていたのが、2週間で終わった。",
    who: "私立大学 経済学部 4年",
    tag: "IT・通信 内定"
  }, {
    q: "AIに添削されるのは怖かったけど、理由が書いてあるから納得できた。",
    who: "国立大学 工学部 修士1年",
    tag: "メーカー 内定"
  }, {
    q: "面接練習の点数が上がっていくのが、単純に楽しかった。",
    who: "私立大学 文学部 4年",
    tag: "商社 内定"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "VOICE",
    index: "05",
    title: "\u53D7\u8B1B\u751F\u306E\u58F0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CircleButton, {
    icon: "arrow-left",
    size: 40,
    label: "\u524D\u3078"
  }), /*#__PURE__*/React.createElement(CircleButton, {
    icon: "arrow-right",
    size: 40,
    label: "\u6B21\u3078"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, people.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.who,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    scrim: "none"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      marginTop: -40,
      marginLeft: 24,
      marginRight: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 14,
      lineHeight: 1.9,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, p.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, p.who), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.tag))))))));
}
function News() {
  const news = [["2026.07.14", "お知らせ", "夏季集中プログラム（8月）の申込受付を開始しました"], ["2026.06.30", "プレス", "提携企業数が1,200社を突破しました"], ["2026.06.02", "アップデート", "面接練習に「逆質問」モードを追加しました"], ["2026.05.19", "お知らせ", "関西エリアの大学向け説明会を開催します"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "0.8fr 1.6fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "NEWS",
    index: "06",
    title: "\u304A\u77E5\u3089\u305B",
    size: "sm"
  }), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "ALL NEWS")), /*#__PURE__*/React.createElement("div", null, news.map(([d, c, t]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "grid",
      gridTemplateColumns: "110px 110px 1fr",
      alignItems: "center",
      gap: 16,
      padding: "22px 0",
      borderTop: "1px solid var(--border-hairline)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, d), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, t))))));
}
function CtaBand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ink-800)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--neutral-400)",
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      position: "relative",
      padding: "110px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 28,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "START FREE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: "var(--tracking-jp-heading)",
      color: "var(--neutral-0)"
    }
  }, "10\u5206\u306E\u8A3A\u65AD\u304B\u3089\u3001\u306F\u3058\u3081\u3088\u3046\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 14,
      lineHeight: 2,
      fontWeight: 300,
      color: "rgba(255,255,255,.75)"
    }
  }, "\u767B\u9332\u306F\u5927\u5B66\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3060\u3051\u3002\u6599\u91D1\u306F\u6700\u5F8C\u307E\u3067\u304B\u304B\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNav("apply")
  }, "\u7121\u6599\u3067\u306F\u3058\u3081\u308B")));
}
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Philosophy, null), /*#__PURE__*/React.createElement(Numbers, null), /*#__PURE__*/React.createElement(ServiceBlocks, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Curriculum, null), /*#__PURE__*/React.createElement(AiSample, null), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(News, null), /*#__PURE__*/React.createElement(CtaBand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  HomeScreen,
  Wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
const {
  Button,
  CircleButton,
  ArrowLink,
  Card,
  Badge,
  Tag,
  Eyebrow,
  SectionHeading,
  MediaFrame,
  Tabs,
  StepIndicator,
  AiTag,
  Icon,
  Stat
} = window.AIDesignSystem_94418b;
function ServiceScreen({
  onNav
}) {
  const [tab, setTab] = React.useState("学生の方");
  const plans = [{
    name: "AI適性診断",
    price: "無料",
    note: "40問 / 約10分",
    items: ["強みの言語化", "適性職種の提示", "結果PDFの書き出し"]
  }, {
    name: "AI基礎講座",
    price: "無料",
    note: "全8回 / 各30分",
    items: ["生成AIの実務活用", "8つの提出ワーク", "修了証の発行"],
    featured: true
  }, {
    name: "選考サポート",
    price: "無料",
    note: "回数制限なし",
    items: ["ES添削", "面接練習", "求人紹介・スカウト"]
  }];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      paddingTop: 78
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-paper)",
      padding: "72px 0 64px"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02"
  }, "SERVICE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--lh-display-2)",
      fontWeight: 800,
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-strong)"
    }
  }, "SERVICE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: 540,
      fontFamily: "var(--font-jp)",
      fontSize: 15,
      lineHeight: 2.1,
      fontWeight: 300,
      color: "var(--text-body)"
    }
  }, "\u5728\u5B66\u4E2D\u306B\u3001AI\u3092\u4F7F\u3044\u3053\u306A\u3059\u529B\u3068\u3001\u9078\u8003\u3092\u901A\u308B\u529B\u3092\u540C\u6642\u306B\u3064\u304F\u308B\u3002\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u304C\u7121\u6599\u3067\u53D7\u3051\u3089\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["学生の方", "大学の方", "企業の方"],
    value: tab,
    onChange: setTab
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FLOW",
    title: "\u767B\u9332\u304B\u3089\u5185\u5B9A\u307E\u3067",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: ["登録（1分）", "適性診断", "講座・ワーク", "ES・面接対策", "選考・内定"],
    current: 2
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 var(--section-pad-y-tight)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    tone: p.featured ? "inverse" : "default",
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 17,
      fontWeight: 700,
      color: p.featured ? "var(--neutral-0)" : "var(--text-strong)"
    }
  }, p.name), p.featured ? /*#__PURE__*/React.createElement(AiTag, {
    tone: "solid",
    label: "POPULAR"
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 34,
      color: p.featured ? "var(--neutral-0)" : "var(--text-strong)"
    }
  }, p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      fontWeight: 300,
      color: p.featured ? "rgba(255,255,255,.6)" : "var(--text-muted)"
    }
  }, p.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, p.items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      fontWeight: 300,
      color: p.featured ? "rgba(255,255,255,.8)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    style: {
      color: p.featured ? "var(--action-accent)" : "var(--text-accent)"
    }
  }), i))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? "accent" : "outline",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => onNav("apply")
  }, "\u7533\u3057\u8FBC\u3080"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-subtle)",
      padding: "var(--section-pad-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    scrim: "none"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "SUPPORT",
    title: "\u62C5\u5F53\u306E\u30AD\u30E3\u30EA\u30A2\u30A2\u30C9\u30D0\u30A4\u30B6\u30FC\u304C\u3064\u304D\u307E\u3059\u3002",
    lede: "AI\u304C\u8FD4\u3059\u306E\u306F\u6307\u6458\u307E\u3067\u3002\u9032\u8DEF\u306E\u5224\u65AD\u306F\u3001\u4EBA\u3068\u8A71\u3057\u3066\u6C7A\u3081\u3089\u308C\u307E\u3059\u3002\u30AA\u30F3\u30E9\u30A4\u30F3\u9762\u8AC7\u306F\u5728\u5B66\u4E2D\u3044\u3064\u3067\u3082\u7121\u6599\u3067\u3059\u3002",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "24",
    unit: "h",
    label: "\u9762\u8AC7\u4E88\u7D04\u306E\u5E73\u5747\u5F85\u3061\u6642\u9593"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.6",
    unit: "/5",
    label: "\u9762\u8AC7\u6E80\u8DB3\u5EA6"
  })), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "ABOUT ADVISORS")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-pad-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, [["本当に無料ですか？", "はい。学生の方は在学中すべてのプログラムを無料で利用できます。費用は提携企業からの採用支援費でまかなっています。"], ["AIが書いた文章をそのまま提出してもいいですか？", "推奨していません。AI就活プロの添削は指摘と理由を返す設計で、最終的な文章はご自身の言葉で書いていただきます。"], ["理系・大学院生でも使えますか？", "使えます。研究内容の言語化に特化した診断とワークを用意しています。"]].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      padding: "26px 0",
      borderTop: "1px solid var(--border-hairline)",
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      lineHeight: 2,
      fontWeight: 300,
      color: "var(--text-muted)"
    }
  }, a)))))));
}
Object.assign(window, {
  ServiceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  ArrowLink,
  Icon
} = window.AIDesignSystem_94418b;
const NAV = [{
  id: "home",
  label: "HOME",
  index: "01"
}, {
  id: "service",
  label: "SERVICE",
  index: "02"
}, {
  id: "apply",
  label: "APPLY",
  index: "03"
}];
function Wordmark({
  tone = "ink",
  size = 20
}) {
  const color = tone === "inverse" ? "var(--neutral-0)" : "var(--ink-900)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 4,
      color,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)",
      fontWeight: "var(--weight-black)",
      fontSize: size,
      letterSpacing: ".02em"
    }
  }, "AI\u5C31\u6D3B\u30D7\u30ED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 8,
      letterSpacing: ".28em",
      opacity: 0.6
    }
  }, "DESIGN YOUR CAREER"));
}
function SiteHeader({
  route,
  onNav
}) {
  const onHome = route === "home";
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const inverse = onHome && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: 78,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      background: inverse ? "transparent" : "var(--glass-light)",
      backdropFilter: inverse ? "none" : "var(--blur-glass)",
      WebkitBackdropFilter: inverse ? "none" : "var(--blur-glass)",
      borderBottom: `1px solid ${inverse ? "transparent" : "var(--border-hairline)"}`,
      transition: "background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: inverse ? "inverse" : "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 34
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    },
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--size-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      fontWeight: "var(--weight-medium)",
      textDecoration: "none",
      color: inverse ? "var(--neutral-0)" : route === n.id ? "var(--text-strong)" : "var(--text-muted)",
      opacity: inverse && route !== n.id ? 0.8 : 1
    }
  }, n.label, /*#__PURE__*/React.createElement("sup", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      opacity: 0.6,
      marginLeft: 3
    }
  }, n.index))), /*#__PURE__*/React.createElement(Button, {
    variant: inverse ? "inverse" : "primary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNav("apply")
  }, "\u7121\u6599\u3067\u306F\u3058\u3081\u308B")));
}
function SiteFooter({
  onNav
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
    },
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 13,
      fontWeight: "var(--weight-light)",
      color: "rgba(255,255,255,.62)",
      textDecoration: "none"
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse-deep)",
      color: "var(--neutral-0)",
      padding: "80px 40px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "inverse",
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-jp)",
      fontSize: 12,
      lineHeight: 2,
      fontWeight: "var(--weight-light)",
      color: "rgba(255,255,255,.55)",
      maxWidth: 280
    }
  }, "AI\u30B9\u30AD\u30EB\u306E\u7FD2\u5F97\u3068\u5C31\u8077\u6D3B\u52D5\u3092\u3001\u3072\u3068\u3064\u306E\u6D41\u308C\u306B\u3002\u5927\u5B66\u751F\u306E\u305F\u3081\u306E\u30AD\u30E3\u30EA\u30A2\u8A2D\u8A08\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002")), col("SERVICE", ["AI適性診断", "ES添削", "面接練習", "求人を探す"]), col("LEARN", ["AI基礎講座", "実務ワーク", "資格対策", "受講生の声"]), col("COMPANY", ["運営会社", "採用情報", "お問い合わせ", "プライバシーポリシー"])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "56px auto 0",
      paddingTop: 24,
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,.4)"
    }
  }, "\xA9 2026 AI SHUKATSU PRO. ALL RIGHTS RESERVED."), /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "inverse",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("apply");
    }
  }, "START FREE")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Wordmark,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AiPanel = __ds_scope.AiPanel;

__ds_ns.AiTag = __ds_scope.AiTag;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CircleButton = __ds_scope.CircleButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
