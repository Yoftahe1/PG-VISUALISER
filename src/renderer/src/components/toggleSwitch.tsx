interface IProps {
  checked: boolean
  onChange: (value: boolean) => void
}

const ToggleSwitch = ({ checked, onChange }: IProps) => (
  <label className="switch">
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    <span className="slider round"></span>
  </label>
)

export default ToggleSwitch
