var React = require('react');
var { View, Text, Switch } = require('react-native');

function checkbox(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var checkboxStyle = stylesheet.checkbox.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    checkboxStyle = stylesheet.checkbox.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }
  // https://github.com/gcanti/tcomb-form-native/issues/415 workaround 
  var label = locals.config.label ? <Text style={controlLabelStyle}>{locals.config.label}</Text> : null;
  var help = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;
  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;

  return (
    <View style={formGroupStyle}>
      {label}
      <Switch
        accessibilityLabel={locals.label}
        ref="input"
        disabled={locals.disabled}
        onTintColor={locals.onTintColor}
        thumbTintColor={locals.thumbTintColor}
        tintColor={locals.tintColor}
        style={checkboxStyle}
        onValueChange={(value) => locals.onChange(value)}
        value={locals.value}
      />
      {help}
      {error}
    </View>
  );
}

module.exports = checkbox;
