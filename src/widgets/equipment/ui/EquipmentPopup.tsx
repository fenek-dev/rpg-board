import BASIC_POPUPS from '~/entities/constant/popup';
import { SimpleDraggablePopup } from '~/widgets/popups/ui/components/SimpleDraggablePopup';

import { EquipmentSlot } from './components/EquipmentSlot';

export const EquipmentPopup = () => {
  return (
    <SimpleDraggablePopup id={BASIC_POPUPS.Equipment.container_id}>
      <div className="flex gap-2">
        <EquipmentSlot allowed="equipment" defaultIcon="🗡️" name="weapon"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🛡️" name="additional"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="👒" name="head"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="📿" name="necklace"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🥋" name="chest"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🧤" name="gloves"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="👟" name="foot"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="💍" name="ring"></EquipmentSlot>
        <EquipmentSlot allowed="equipment" defaultIcon="🔮" name="artefact"></EquipmentSlot>
      </div>
    </SimpleDraggablePopup>
  );
};
