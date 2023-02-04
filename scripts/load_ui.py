import modules.script_callbacks
import gradio as gr


def on_ui_tabs():
    html = "<novelai-tag/>"
    with gr.Blocks(analytics_enabled=False) as novelai_tag_webui:
        gr.HTML(html)
    return (novelai_tag_webui , "Novelai Tags", "novelai_tag_webui"),


modules.script_callbacks.on_ui_tabs(on_ui_tabs)