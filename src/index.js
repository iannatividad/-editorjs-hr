require("./index.css").toString();
class HrTool {
    /**
     * Notify core that read-only mode is supported
     * @return {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }

    /**
     * Allow Tool to have no content
     * @return {boolean}
     */
    static get contentless() {
        return true;
    }

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: HrData, config: object, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     */
    constructor({ data, _, api }) {
        this.api = api;

        this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-hr",
        };

        this._data = {};
        this._element = this.drawView();

        this.data = data;
    }

    /**
     * Create Tool's view
     * @return {HTMLElement}
     * @private
     */
    drawView() {
        let HR = document.createElement("hr");

        HR.classList.add(this._CSS.wrapper, this._CSS.block);

        return div;
    }

    /**
     * Return Tool's view
     * @returns {HTMLDivElement}
     * @public
     */
    render() {
        return this._element;
    }

    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {DelimiterData} - saved data
     * @public
     */
    save(toolsContent) {
        return {};
    }

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox() {
        return {
            icon: `<svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1466 2.81552H0.0605469V0.803223H14.1466V2.81552Z"/>
                  </svg>`,
            title: "Hr",
        };
    }
}

module.exports = HrHrTool;
