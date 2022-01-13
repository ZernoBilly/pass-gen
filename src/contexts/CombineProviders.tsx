import React from "react";

import { ModalProvider } from "./modalContext";
import { PasswordProvider } from "./passwordContext";
import { StyleProvider } from "./styleContext";
import { UserProvider } from "./userContext";

import { combineComponents } from "../utils/combineComponents";

const providers = [
  ModalProvider,
  PasswordProvider,
  StyleProvider,
  UserProvider,
];

export const CombinedProviders = combineComponents(...providers);
