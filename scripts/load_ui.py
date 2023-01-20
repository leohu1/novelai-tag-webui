from typing import Optional
import modules.script_callbacks
import gradio as gr
from modules import shared, scripts
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os



extension_dir = scripts.basedir()
# don't use scripts.basedir() in function, or it will return the rootpath of webui.

def on_app_started(demo: Optional[gr.Blocks], app: FastAPI):
    app.mount('/novelai_tag_webui', StaticFiles(directory=os.path.join(extension_dir, "dist"),html=True))	


def on_ui_tabs():
    html = f"""<iframe id="tab_iframe" allow="clipboard-read; clipboard-write" 
    style="width: 100%; min-height: 1080px; padding: 0;margin: 0;border: none;" 
    src="/novelai_tag_webui" frameborder="0" marginwidth="0" marginheight="0"/>"""
    with gr.Blocks(analytics_enabled=False) as novelai_tag_webui:
        gr.HTML(html)
    return (novelai_tag_webui , "Novelai Tags", "novelai_tag_webui"),


modules.script_callbacks.on_app_started(on_app_started)
modules.script_callbacks.on_ui_tabs(on_ui_tabs)