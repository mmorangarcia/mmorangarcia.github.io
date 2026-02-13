import { useRef } from 'react';
import VariableProximity from './VariableProximity';

type NameTitleProps = {
  label: string;
};

export default function NameTitle({ label }: NameTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null!);
  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <VariableProximity
        label={label}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
}
