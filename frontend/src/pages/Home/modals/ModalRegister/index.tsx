import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { Controller } from 'react-hook-form'
import { TextArea } from 'components/TextArea'
import { TextField } from 'components/TextField'
import { CiImageOn } from 'react-icons/ci'
import { DatePicker } from 'components/Card/components/DatePicker'
import { useModalRegister } from './hook'

export const ModalRegister = () => {
  const {
    open,
    title,
    filePreview,
    control,
    isLoadingSubmit,
    inputFileRef,
    handleSubmit,
    onClose,
    register,
    onChangeFileSelect,
    onClickUploadButton,
  } = useModalRegister()

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex w-[48.75rem] flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col gap-3">
              <TextField
                {...register('titulo')}
                placeholder="Título"
              ></TextField>

              <TextField {...register('autor')} placeholder="Autor"></TextField>

              <Controller
                control={control}
                name="dataPublicacao"
                render={({ field }) => (
                  <DatePicker
                    id="dt-publicacao"
                    placeholder="Data de publicação"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              ></Controller>
            </div>

            <input
              onChange={onChangeFileSelect}
              ref={inputFileRef}
              type="file"
              id="get-file"
              style={{
                display: 'none',
              }}
            />

            <div
              className={`flex w-60 cursor-pointer flex-col items-center justify-center rounded-sm ${filePreview ? 'bg-gray-200' : 'bg-white'} p-1`}
              onClick={onClickUploadButton}
            >
              {filePreview ? (
                <article className="flex justify-center bg-gray-200">
                  <img src={filePreview} className="h-48 w-64 object-contain" />
                </article>
              ) : (
                <>
                  <CiImageOn size={84}></CiImageOn>
                  <p className="text-input-placeholder">Escolher imagem</p>
                </>
              )}
            </div>
          </div>

          <TextArea
            {...register('descricao')}
            placeholder="Descrição"
            rows={10}
          ></TextArea>

          <div className="flex justify-center gap-5">
            <Button size="small" shape="rounded" color="gray" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              size="small"
              shape="rounded"
              color="primary"
              type="submit"
              isLoading={isLoadingSubmit}
              onClick={handleSubmit}
            >
              Salvar
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
