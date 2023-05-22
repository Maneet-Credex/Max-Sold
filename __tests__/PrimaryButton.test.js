import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import PrimaryButton from "@/Components/PrimaryButton";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const pushMock = jest.fn();
useRouter.mockReturnValue({ push: pushMock });

// PRIMARY BUTTON TESTCASES
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
    render(
      <ThemeProvider theme={theme}>
        <PrimaryButton>GET STARTED SELLING</PrimaryButton>
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("GET STARTED SELLING");

    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith("/register");
  });
});

// NAVBAR TESTCASES
describe("NavBar", () => {
  const menuItems = [
    "Auction",
    "Sell Everything",
    "Partners",
    "About",
    "Resources",
    "Support",
    "COVID-19",
  ];

  it("renders button with correct content", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
      </ThemeProvider>
    );
    menuItems.forEach((item) => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveTextContent(item);
    });
  });
  it("navigates to the correct page when a menu item is clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
      </ThemeProvider>
    );
    menuItems.forEach((item) => {
      const menuItem = screen.getByText(item);
      fireEvent.click(menuItem);
      expect(pushMock).toHaveBeenCalledWith(`/${item}`);
    });
  });
});

// FOOTER BUTTON TESTCASES

describe("Footer", () => {
  it("renders with correct content", () => {
    render(<Footer />);

    const trendingAuctions = screen.getByText("Trending Auctions");
    expect(trendingAuctions).toBeInTheDocument();
    fireEvent.click(trendingAuctions);
    expect(pushMock).toHaveBeenCalledWith("/trending");
  });
});
