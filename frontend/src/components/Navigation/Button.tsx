import { LucideIcon } from 'lucide-react';

interface Props {
  onAction: () => void
  disabled: boolean
  Icon: LucideIcon
}

export const Button = ({ onAction, Icon, disabled }: Props) => {

  return (
    <button 
      onClick={onAction}
      disabled={disabled}
      className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-full disabled:bg-slate-200">
        <Icon />
    </button>
  )
}
