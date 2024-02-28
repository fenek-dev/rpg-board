import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { EquipmentSlot } from './components/EquipmentSlot';

export const EquipmentPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Equipment.container_id}>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <EquipmentSlot allowed="equipment" defaultIcon="📿" name="necklace"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="👒" name="head"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🔮" name="artefact"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🗡️" name="weapon"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🥋" name="chest"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🛡️" name="additional"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="💍" name="ring"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="👟" name="foot"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🧤" name="gloves"></EquipmentSlot>
      </div>
    </SimpleDraggablePopup>
  );
};
