import React, { Children, createContext, HTMLAttributes, useContext, useEffect, useState } from "react"
import Button from "../elements/button"

type OverlayProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

type ModelProps = {
  children: React.ReactNode
  open?: boolean
  onClose?: () => void
  onOpen?: () => void
}

type ModelTriggerProps = {
  children: React.ReactNode
}

type ModelContentProps = {
  children: React.ReactNode
}

const ModalContext = createContext<any>(null)

export default function Modal({ children, open, onClose, onOpen }: ModelProps) {
  return <ModalContext.Provider value={{ open, onClose, onOpen }}>{children}</ModalContext.Provider>
}

Modal.Overlay = function ({ children, ...props }: OverlayProps) {
  const { onClose } = useContext(ModalContext)

  useEffect(() => {
    const closeModalOnEsc = (e: KeyboardEvent) => {
      return e.key === "Escape" ? () => onClose() : () => null
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", closeModalOnEsc)

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("keydown", closeModalOnEsc)
    }
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[10000] flex h-screen w-screen items-center justify-center backdrop-blur-sm"
      {...props}
    >
      {children}
    </div>
  )
}

Modal.Trigger = function ({ children, ...props }: ModelTriggerProps) {
  const { onOpen } = useContext(ModalContext)

  return (
    <Button
      {...props}
      onClick={onOpen}
    >
      {children}
    </Button>
  )
}

Modal.Content = function ({ children, ...prop }: ModelContentProps) {
  const { open, onClose } = useContext(ModalContext)

  return (
    open && (
      <Modal.Overlay onClick={() => onClose()}>
        <div
          {...prop}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {children}
        </div>
      </Modal.Overlay>
    )
  )
}
