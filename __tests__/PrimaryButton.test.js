import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import PrimaryButton from "@/Components/PrimaryButton";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("PrimaryButton", () => {
  it("renders button with correct content", () => {
    const content = "Click me!";
    render(
      <ThemeProvider theme={theme}>
        <PrimaryButton content={content} />
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(content);
  });

  it("navigates to /register when clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(
      <ThemeProvider theme={theme}>
        <PrimaryButton />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith("/register");
  });
});
