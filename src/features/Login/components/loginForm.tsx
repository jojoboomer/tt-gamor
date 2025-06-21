import Button from "@/components/ui/buttom";
import Input from "@/components/ui/input";
import { useFormik } from "formik";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import useAuthenticationStore from "../store/auth.store";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthenticationStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      await login(values).then(() => {
        setIsLoading(false);
        navigate("/");
      });
      setIsLoading(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 justify-center "
    >
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          leftChildren={<Mail className="h-5 w-5 text-text-secondary" />}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-400 text-sm animate-pulse">
            {formik.errors.email}
          </p>
        )}
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          leftChildren={<Mail className="h-5 w-5 text-text-secondary" />}
          rightChildren={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          }
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-400 text-sm animate-pulse">
            {formik.errors.password}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4" />
          <span>Remember me</span>
        </label>
        <a
          href="/password-reset"
          className="text-primary hover:brightness-150 transition-colors duration-200"
        >
          ¿Forgot your password?
        </a>
      </div>

      <div className="w-full flex justify-center">
        <Button
          type="submit"
          disabled={isLoading}
          size="lg"
          variant="default"
          color="primary"
          className="w-4/5"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Logging in...
            </div>
          ) : (
            <div className="flex items-center justify-center">Log in</div>
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
