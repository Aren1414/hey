import { chains } from "@lens-chain/sdk/viem";
import LensEndpoint from "./lens-endpoints";
import getEnvConfig from "./utils/getEnvConfig";

// Environments
export const IS_PRODUCTION = process.env.VITE_IS_PRODUCTION === "true";

// Lens and Hey Env Config
export const LENS_NETWORK = process.env.NEXT_PUBLIC_LENS_NETWORK || "mainnet";

export const LENS_API_URL = getEnvConfig().lensApiEndpoint;
export const DEFAULT_COLLECT_TOKEN = getEnvConfig().defaultCollectToken;
export const HEY_APP = process.env.HEY_APP || getEnvConfig().appAddress;
export const HEY_SPONSOR = process.env.HEY_SPONSOR || getEnvConfig().sponsorAddress;
export const HEY_TREASURY = process.env.HEY_TREASURY || "0x03Ba34f6Ea1496fa316873CF8350A3f7eaD317EF";

export const HEY_API_PRODUCTION_URL = "https://api.hey.xyz";
export const HEY_API_URL = IS_PRODUCTION
  ? HEY_API_PRODUCTION_URL
  : process.env.HEY_API_LOCAL || "http://localhost:4784";

export const IS_MAINNET = LENS_API_URL === LensEndpoint.Mainnet;
export const CHAIN = IS_MAINNET ? chains.mainnet : chains.testnet;
export const ADDRESS_PLACEHOLDER = "0x03Ba3...7EF";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

// Subscription
export const SUBSCRIPTION_AMOUNT = Number(process.env.SUBSCRIPTION_AMOUNT) ?? 15;
export const SUBSCRIPTION_DURATION_DAYS = Number(process.env.SUBSCRIPTION_DURATION_DAYS) || 365;
export const SUBSCRIPTION_GROUP = process.env.SUBSCRIPTION_GROUP || "0x4BE5b4519814A57E6f9AaFC6afBB37eAEeE35aA3";

// Application
export const BRAND_COLOR = process.env.BRAND_COLOR || "#FB3A5D";

// URLs
export const STATIC_ASSETS_URL = "https://static.hey.xyz";
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`;
export const LENS_MEDIA_SNAPSHOT_URL = "https://ik.imagekit.io/lens";
export const DEFAULT_OG = `${STATIC_IMAGES_URL}/og/cover.png`;
export const DEFAULT_AVATAR = `${STATIC_IMAGES_URL}/default.png`;
export const PLACEHOLDER_IMAGE = `${STATIC_IMAGES_URL}/placeholder.webp`;
export const DEVELOPER_PORTAL_URL = "https://developer.lens.xyz/sponsorship";
export const BLOCK_EXPLORER_URL = IS_MAINNET
  ? "https://lenscan.io"
  : "https://testnet.lenscan.io";

// Storage
export const STORAGE_NODE_URL = "https://api.grove.storage";
export const IPFS_GATEWAY = "https://gw.ipfs-lens.dev/ipfs";
export const EVER_API = "https://endpoint.4everland.co";
export const EVER_REGION = "4EVERLAND";
export const EVER_BUCKET = process.env.EVER_BUCKET || "heyverse";

// Tokens / Keys
export const GIPHY_KEY = process.env.GIPHY_KEY || "";
export const LIVEPEER_KEY = process.env.LIVEPEER_KEY || "";

// Named transforms for ImageKit
export const AVATAR_BIG = "tr:w-350,h-350";
export const AVATAR_SMALL = "tr:w-100,h-100";
export const AVATAR_TINY = "tr:w-50,h-50";
export const EXPANDED_AVATAR = "tr:w-1000,h-1000";
export const COVER = "tr:w-1350,h-350";
export const ATTACHMENT = "tr:w-1000";

export const LENS_NAMESPACE = "lens/";
export const NATIVE_TOKEN_SYMBOL = IS_MAINNET ? "GHO" : "GRASS";
export const WRAPPED_NATIVE_TOKEN_SYMBOL = IS_MAINNET ? "WGHO" : "WGRASS";

export const MAX_IMAGE_UPLOAD = Number(process.env.MAX_IMAGE_UPLOAD) ?? 8;

export const BANNER_IDS = {
  PRO: process.env.BANNER_PRO_ID || "108325599858337195593675454288445399104045325554183036578573525280972584660299"
};
