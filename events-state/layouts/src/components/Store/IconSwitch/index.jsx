export default function IconSwitch({icon, onSwitch}) {
  const currentIcon = icon === 'view_module' ? 'view_list' : 'view_module';
  return (
    <div className='icon-switch-component'>
      <span className="material-icons" onClick={() => onSwitch(currentIcon)}>{currentIcon}</span>
    </div>
  )
}
