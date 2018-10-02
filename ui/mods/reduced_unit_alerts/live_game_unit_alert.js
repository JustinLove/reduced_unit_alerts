(function() {
  var keep = function(alert) {
    return eventSystem.isType(constants.unit_type.Nuke, alert.unit_types)
      || eventSystem.isType(constants.unit_type.NukeDefense, alert.unit_types)
      || eventSystem.isType(constants.unit_type.Titan, alert.unit_types)
      || eventSystem.isType(constants.unit_type.Commander, alert.unit_types)
      || eventSystem.isType(constants.unit_type.SelfDestruct, alert.unit_types)
      || eventSystem.isType(constants.unit_type.PlanetEngine, alert.unit_types)
      || eventSystem.isType(constants.unit_type.ControlModule, alert.unit_types)
      || (eventSystem.isType(constants.unit_type.Artillery, alert.unit_types)
        && eventSystem.isType(constants.unit_type.Factory, alert.unit_types))
  }

  var default_suppressVisualAlert = model.suppressVisualAlert
  model.suppressVisualAlert = function reduced_unit_alerts_suppressVisualAlert(alert) {
    //console.log(alert)
    return default_suppressVisualAlert(alert)
      || ((alert.watch_type == constants.watch_type.ready
          || alert.watch_type == constants.watch_type.sight)
          && !keep(alert)
         )
  }
  model.suppressVisualAlert.previous = default_suppressVisualAlert
})()
