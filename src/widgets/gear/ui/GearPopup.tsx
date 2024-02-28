import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { GearSlot } from './components/GearSlot';

export const GearPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Gear.container_id}>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <GearSlot defaultIcon="📿" name="necklace"></GearSlot>
        <GearSlot defaultIcon="👒" name="head"></GearSlot>
        <GearSlot defaultIcon="🔮" name="artefact"></GearSlot>
        <GearSlot allowed="gear" defaultIcon="🗡️" name="weapon"></GearSlot>
        <GearSlot defaultIcon="🥋" name="chest"></GearSlot>
        <GearSlot allowed="gear" defaultIcon="🛡️" name="additional"></GearSlot>
        <GearSlot defaultIcon="💍" name="ring"></GearSlot>
        <GearSlot defaultIcon="👟" name="foot"></GearSlot>
        <GearSlot defaultIcon="🧤" name="gloves"></GearSlot>
      </div>
    </SimpleDraggablePopup>
  );
};
