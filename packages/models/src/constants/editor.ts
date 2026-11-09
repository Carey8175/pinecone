// Modified for pinecone desktop; see NOTICE.
import { DEFAULT_IDE } from '../ide/index.ts';

export const APP_NAME = 'pinecone';
export const APP_SCHEMA = 'pinecone';
export const HOSTING_DOMAIN = 'pinecone.localhost';
export const CUSTOM_OUTPUT_DIR = '.next-prod';
export const MAX_NAME_LENGTH = 50;

export enum EditorAttributes {
    // DOM attributes
    PINECONE_TOOLBAR = 'pinecone-toolbar',
    PINECONE_RECT_ID = 'pinecone-rect',
    PINECONE_STYLESHEET_ID = 'pinecone-stylesheet',
    PINECONE_STUB_ID = 'pinecone-drag-stub',
    PINECONE_MOVE_KEY_PREFIX = 'olk-',
    OVERLAY_CONTAINER_ID = 'overlay-container',
    CANVAS_CONTAINER_ID = 'canvas-container',

    // IDs
    DATA_PINECONE_ID = 'data-oid',
    DATA_PINECONE_INSTANCE_ID = 'data-oiid',
    DATA_PINECONE_DOM_ID = 'data-odid',
    DATA_PINECONE_COMPONENT_NAME = 'data-ocname',

    // Data attributes
    DATA_PINECONE_IGNORE = 'data-pinecone-ignore',
    DATA_PINECONE_INSERTED = 'data-pinecone-inserted',
    DATA_PINECONE_DRAG_SAVED_STYLE = 'data-pinecone-drag-saved-style',
    DATA_PINECONE_DRAGGING = 'data-pinecone-dragging',
    DATA_PINECONE_DRAG_DIRECTION = 'data-pinecone-drag-direction',
    DATA_PINECONE_DRAG_START_POSITION = 'data-pinecone-drag-start-position',
    DATA_PINECONE_NEW_INDEX = 'data-pinecone-new-index',
    DATA_PINECONE_EDITING_TEXT = 'data-pinecone-editing-text',
    DATA_PINECONE_DYNAMIC_TYPE = 'data-pinecone-dynamic-type',
    DATA_PINECONE_CORE_ELEMENT_TYPE = 'data-pinecone-core-element-type',
    PINECONE_DEFAULT_STYLESHEET_ID = 'pinecone-default-stylesheet',
}

export enum Links {
    DISCORD = 'https://github.com/Carey8175/pinecone/issues',
    GITHUB = 'https://github.com/Carey8175/pinecone',
    USAGE_DOCS = 'https://github.com/Carey8175/pinecone/wiki/How-to-set-up-my-project%3F',
    WIKI = 'https://github.com/Carey8175/pinecone/wiki',
    OPEN_ISSUE = 'https://github.com/Carey8175/pinecone/issues/new/choose',
}

export enum Orientation {
    Portrait = 'Portrait',
    Landscape = 'Landscape',
}

export enum Theme {
    Light = 'light',
    Dark = 'dark',
    System = 'system',
}

export const DefaultSettings = {
    SCALE: 0.7,
    PAN_POSITION: { x: 175, y: 100 },
    URL: 'http://localhost:3000/',
    FRAME_POSITION: { x: 0, y: 0 },
    FRAME_DIMENSION: { width: 1536, height: 960 },
    ASPECT_RATIO_LOCKED: false,
    DEVICE: 'Custom:Custom',
    THEME: Theme.System,
    ORIENTATION: Orientation.Portrait,
    MIN_DIMENSIONS: { width: '280px', height: '360px' },
    COMMANDS: {
        run: 'npm run dev',
        build: 'npm run build',
        install: 'npm install',
    },
    IMAGE_FOLDER: 'public/images',
    IMAGE_DIMENSION: { width: '100px', height: '100px' },
    FONT_FOLDER: 'public/fonts',
    FONT_CONFIG: 'app/fonts.ts',
    CHAT_SETTINGS: {
        showSuggestions: true,
        autoApplyCode: true,
        expandCodeBlocks: false,
        showMiniChat: true,
    },
    EDITOR_SETTINGS: {
        shouldWarnDelete: true,
        ideType: DEFAULT_IDE,
        enableBunReplace: true,
        buildFlags: '--no-lint',
    },
};

export const DEFAULT_COLOR_NAME = 'DEFAULT';
