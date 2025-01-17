import { KeyboardDatePicker, TextField, makeValidate } from 'mui-rff';
import React, { useContext, useState } from 'react';
import { Form } from 'react-final-form';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { Button } from '@material-ui/core';
import classNames from 'clsx';
import { UserContext } from '@lib/context';
import GenderField from '@components/inputs/GenderField';
import UserAvatar from '@components/decoration/UserAvatar';
import UsernameField from '@components/inputs/UsernameField';
import updateAccountFirestore from './UpdateAccount.firestore';
import updateAccountSchema from './UpdateAccount.schema';
import ProfilePictureEditor from '@components/general/ProfilePictureEditor';

interface Props {
  className?: string;
  onClose?: () => void;
  submitButtonProps?: ButtonProps;
  submitButtonInnerText?: string;
}

const UpdateAccount = ({
  className,
  onClose,
  submitButtonProps,
  submitButtonInnerText,
}: Props) => {
  const [editorOpen, setEditorOpen] = useState(false);

  const { userDetails } = useContext(UserContext);
  const oldUsername = userDetails?.username;

  const initialValues = {
    birthdate: userDetails?.birthdate,
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    gender: userDetails?.gender,
    photoUrl: userDetails?.photoUrl,
    newUsername: oldUsername,
  };

  const updateAccount = async (values: Omit<UpdateAccountValuesType, 'oldUsername'>) => {
    onClose?.();
    await updateAccountFirestore({
      ...values,
      oldUsername,
    });
  };

  return (
    <>
      <Form
        onSubmit={updateAccount}
        initialValues={initialValues}
        validate={makeValidate(updateAccountSchema) as any}
      >
        {({ handleSubmit, submitting, values }) => (
          <form
            className={classNames(
              className,
              'grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'
            )}
            onSubmit={handleSubmit}
          >
            <TextField className="sm:col-span-3" label="Nome" name="firstName" />
            <TextField className="sm:col-span-3" label="Sobrenome" name="lastName" />
            <UsernameField
              className="sm:col-span-6"
              label="Identificador"
              name="newUsername"
            />

            <div className="sm:col-span-6 mt-1 flex items-center">
              <UserAvatar />
              <div className="ml-4 flex space-x-3">
                <Button
                  className="shadow-blue-500 hover:shadow-xl-blue-500"
                  color="secondary"
                  variant="contained"
                  size="small"
                  onClick={() => setEditorOpen(true)}
                >
                  Alterar
                </Button>
                <Button
                  className="text-gray-600"
                  variant="outlined"
                  color="default"
                  size="small"
                >
                  Remover
                </Button>
              </div>
            </div>

            <div className="sm:col-span-6">
              <KeyboardDatePicker
                label="Data de nascimento"
                name="birthdate"
                format="dd/MM/yyyy"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div className="sm:col-span-6">
              <GenderField label="Gênero" name="gender" />
            </div>

            <div className="sm:col-span-6">
              <Button
                className="shadow-blue-500 hover:shadow-xl-blue-500 w-full group"
                color="secondary"
                variant="contained"
                size="small"
                endIcon={<ArrowRightIcon className="group-hover:ml-1 h-4 w-4" />}
                type="submit"
                disabled={submitting}
                {...submitButtonProps}
              >
                {submitButtonInnerText ?? 'Próximo'}
              </Button>
            </div>
            {/*<pre>{JSON.stringify(values, undefined, 2)}</pre>*/}
          </form>
        )}
      </Form>
      <ProfilePictureEditor
        open={editorOpen}
        onClose={() => setEditorOpen(false)}
        userRef={userDetails?.ref}
      />
    </>
  );
};

export default UpdateAccount;
