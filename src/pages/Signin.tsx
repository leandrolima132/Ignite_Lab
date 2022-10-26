import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, LockKey } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInputs } from "../components/Input";
import { Text } from "../components/Text";
import Logo from "../Logo";

export function SignIn() {
  const [auth, setAuth] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await axios
      .post("/api/auth/signin", {
        email: "leandro@gmail.com",
        password: "123456",
      })
      .then((response) => {});

    setAuth(true);
  }

  return (
    <div className="w-screen h-screen flex-col bg-gray-900  flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="2xl" className="mt-2 ">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar
        </Text>
      </header>
      {auth && (
        <Text size="lg" className="text-gray-400">
          Logado
        </Text>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text>Endereço de e-mail</Text>
          <TextInputs.Root>
            <TextInputs.Icon>
              <Envelope />
            </TextInputs.Icon>
            <TextInputs.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInputs.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text>Sua senha</Text>
          <TextInputs.Root>
            <TextInputs.Icon>
              <LockKey />
            </TextInputs.Icon>
            <TextInputs.Input
              type="password"
              id="password"
              placeholder="************"
            />
          </TextInputs.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Manter-me conectado
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-4">
        <Text size="sm" asChild>
          <a
            href="http://localhost:5173/"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a
            href="http://localhost:5173/"
            className="text-gray-400 underline hover:text-gray-200"
          >
            Não tem uma conta? Cadastre-se agora
          </a>
        </Text>
      </footer>
    </div>
  );
}
