import Modal from './Modal'

export default function SOSModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Emergency SOS Activated">
      <p>
        Stay calm. Your location is tracked and sent to emergency responders.
        Please contact the nearest hotline listed on this page.
      </p>
      <p className="mt-3 text-xs text-emerald-700 dark:text-emerald-200">
        This is a front-end mock action only.
      </p>
    </Modal>
  )
}
