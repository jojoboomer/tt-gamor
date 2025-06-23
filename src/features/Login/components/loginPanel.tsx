import Button from "@/components/ui/buttom";
import Divider from "@/components/ui/divider";
import { Discord } from "@components/icons/discord";
import { Google } from "@components/icons/google";
import { Link } from "react-router";
import LoginForm from "./loginForm";

const LoginPanel = () => {
  return (
    <section className="z-10 px-4 sm:px-12 md:px-20 xl:px-30">
      <div className="space-y-6 text-text-secondary max-md:bg-background/40 max-md:p-6 max-md:rounded-2xl max-md:backdrop-blur-lg">
        <div className="">
          <h1 className="text-xl font-bold text-text mb-2">Sign in to Gamor</h1>
          <p>Sign in to your account</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" color="default">
            <Google className="size-5" />
            <span className="hidden lg:inline ml-2">Login with Google</span>
          </Button>
          <Button variant="outline" color="default">
            <Discord className="h-5 w-5 mr-2 fill-[#5865F2]" />
            <span className="hidden lg:inline ml-2">Sign in with Discord</span>
          </Button>
        </div>

        <Divider>
          <span className="text-sm uppercase">or login with email</span>
        </Divider>

        <LoginForm />

        <div className="text-center text-sm">
          <span className="text-text-secondary">
            ¿Don't have account?{" "}
            <Button variant="text" size="sm" className="text-primary hover:text-primary/70 font-semibold">
              <Link to="/register">Sign up now</Link>
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LoginPanel;
