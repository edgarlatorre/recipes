import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from "./Button"

interface Props {
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export const Navigation = ({ onNext, onPrevious, hasNext, hasPrevious }: Props) => {
  return (
    <div className="flex justify-center py-4 space-x-64">
      <Button onAction={onPrevious} Icon={ArrowLeft} disabled={!hasPrevious}/>
      <Button onAction={onNext} Icon={ArrowRight} disabled={!hasNext}/>
    </div>
  )
}
