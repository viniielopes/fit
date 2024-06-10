import { create } from 'zustand'

import type { Modals } from './types'

type ModalName = keyof typeof Modals | ''

type SetModalProps<T> = {
  data: T
  name?: ModalName
}

export type UseModalFields<T> = {
  name: ModalName
  data: T | null
  setModal(modal: SetModalProps<T>): void
  closeModal(): void
}

export const useModal = create<UseModalFields<unknown>>((set) => ({
  name: '',
  data: undefined,
  setModal: (data) =>
    set(() => ({
      ...data,
    })),
  closeModal: () =>
    set(() => ({
      name: '',
      data: null,
    })),
}))
