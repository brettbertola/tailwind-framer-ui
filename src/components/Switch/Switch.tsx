import { useState } from 'react'
import { Switch } from '@headlessui/react'

export interface MySwitchProps {
    label: string;
  }

function MySwitch(props:MySwitchProps) {
    const {label} = props
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group>
      <div className="flex items-center">
    <Switch.Label className="mr-4">{label}</Switch.Label>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`transition ease-in-out duration-200 ${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
    
      <span
        className={`transition ease-in-out duration-200 ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
    </div>
    </Switch.Group>
  )
}

export default MySwitch;