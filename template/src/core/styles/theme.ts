/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import {
  DarkTheme as DefaultDarkNavigationTheme,
  DefaultTheme as DefaultLightNavigationTheme
} from "@react-navigation/native";
import { createTheme } from "@rneui/themed";

export const theme = createTheme();

export const lightNavigationTheme = { ...DefaultLightNavigationTheme };

export const darkNavigationTheme = { ...DefaultDarkNavigationTheme };
