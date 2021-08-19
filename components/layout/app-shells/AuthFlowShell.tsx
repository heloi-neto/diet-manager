import type { ReactNode } from 'react';

import UnauthCheck from '@components/auth/UnauthCheck';
import AuthIllustration from '@components/decoration/AuthIllustration';
import Widget from '../Widget';
import Divider from '../Divider';
import { Button } from '@material-ui/core';
import { continueWithFacebook, continueWithGoogle } from '@lib/auth';
import GoogleIcon from '@components/icons/GoogleIcon';
import FacebookIcon from '@components/icons/FacebookIcon';

interface Props {
  children: ReactNode;
}

const AuthFlowShell = ({ children }: Props) => {
  return (
    <UnauthCheck>
      <main className="overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen lg:flex">
            <AuthIllustration />
            <Widget className="lg:w-2/5 my-auto">
              {children}
              <Divider className="mt-4 mb-2">Ou continue com</Divider>
              <Button
                className="w-full mt-2 font-bold bg-gray-50 hover:bg-gray-300 text-gray-800 shadow-gray-800 hover:shadow-xl-gray-800"
                color="inherit"
                startIcon={<GoogleIcon />}
                onClick={continueWithGoogle}
              >
                Google
              </Button>
              <Button
                className="w-full mt-2 font-bold bg-blue-500 hover:bg-blue-600 shadow-blue-500 hover:shadow-xl-blue-500"
                startIcon={<FacebookIcon />}
                onClick={continueWithFacebook}
              >
                Facebook
              </Button>
            </Widget>
          </div>
        </div>
      </main>
    </UnauthCheck>
  );
};

export default AuthFlowShell;
