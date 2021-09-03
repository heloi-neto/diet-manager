import { KeyboardDatePicker, makeValidate, TextField } from 'mui-rff';
import React, { useContext } from 'react';
import { Form } from 'react-final-form';

import GenderField from '@components/inputs/GenderField';
import { Button, InputAdornment } from '@material-ui/core';
import UserAvatar from '@components/decoration/UserAvatar';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { UserContext } from '@lib/context';
import { DateTime } from 'luxon';
import updateAccountFirestore from './UpdateAccount.firebase';
import updateAccountSchema from './UpdateAccount.schema';
import { kebabCase } from 'lodash';
import UsernameField from '@components/inputs/UsernameField';

interface Props {
  className?: string;
  onClose?: () => void;
}

const UpdateAccount = ({ className, onClose }: Props) => {
  const { userDetails } = useContext(UserContext);

  const birthdateJSDate = userDetails?.birthdate
    ? DateTime.fromSeconds(
        // @ts-ignore
        userDetails.birthdate.seconds
      ).toJSDate()
    : undefined;

  const oldUsername = userDetails?.username;

  const initialValues = {
    birthdate: birthdateJSDate,
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    gender: userDetails?.gender,
    photoURL: userDetails?.photoURL,
    newUsername: oldUsername,
  };

  const updateAccount = async (
    values: Omit<UpdateAccountValuesType, 'oldUsername'>
  ) => {
    onClose && onClose();
    await updateAccountFirestore({
      ...values,
      oldUsername,
    });
  };

  return (
    <Form
      onSubmit={updateAccount}
      initialValues={initialValues}
      // @ts-ignore
      validate={makeValidate(updateAccountSchema)}
    >
      {({ handleSubmit, submitting, values }) => (
        <form
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6"
          onSubmit={handleSubmit}
        >
          <div className="sm:col-span-3">
            <TextField label="Nome" name="firstName" />
          </div>

          <div className="sm:col-span-3">
            <TextField label="Sobrenome" name="lastName" />
          </div>

          <div className="sm:col-span-6">
            <UsernameField label="Identificador" name="newUsername" />
          </div>

          <div className="sm:col-span-6">
            <div className="mt-1 flex items-center">
              <UserAvatar />
              <div className="ml-4 flex space-x-3">
                <Button
                  className="shadow-blue-500 hover:shadow-xl-blue-500"
                  color="secondary"
                  variant="contained"
                  size="small"
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
            >
              Próximo
            </Button>
          </div>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  );
};

export default UpdateAccount;
