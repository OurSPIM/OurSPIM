//use crate::parser::parser_structs_and_enums::instruction_tokenization::ProgramInfo;
//use monaco::api::TextModel;
use wasm_bindgen::JsCast;
use web_sys::HtmlElement;
use yew::prelude::*;
use yew_hooks::prelude::*;

use crate::emulation_core::mips::datapath::MipsDatapath;
use crate::ui::visual_datapath::{DatapathSize, VisualDatapath};

#[derive(PartialEq, Properties)]
pub struct Consoleprops {
    pub datapath: MipsDatapath,
    pub parsermsg: String,
    pub memorymsg: String,
}

#[derive(Default, PartialEq)]
enum TabState {
    #[default]
    Console,
    Datapath,
    Memory,
}

#[function_component(Console)]
pub fn console(props: &Consoleprops) -> Html {
    let active_tab = use_state_eq(TabState::default);
    let zoom_datapath = use_bool_toggle(false);
    let change_tab = {
        let active_tab = active_tab.clone();
        Callback::from(move |event: MouseEvent| {
            let target = event.target().unwrap().dyn_into::<HtmlElement>().unwrap();
            let tab_name = target
                .get_attribute("label")
                .unwrap_or(String::from("console"));

            let new_tab = match tab_name.as_str() {
                "console" => TabState::Console,
                "datapath" => TabState::Datapath,
                "memory" => TabState::Memory,
                _ => TabState::default(),
            };

            active_tab.set(new_tab);
        })
    };

    let toggle_zoom = {
        let zoom_datapath = zoom_datapath.clone();

        Callback::from(move |_| {
            zoom_datapath.toggle();
        })
    };

    let datapath_size = match *zoom_datapath {
        true => DatapathSize::Big,
        false => DatapathSize::Small,
    };

    html! {
        <>
            // Console buttons
            <div class="tabs">
                <button class="tab" label="console" onclick={change_tab.clone()}>{"Console"}</button>
                <button class="tab" label="datapath" onclick={change_tab.clone()}>{"Datapath"}</button>
                <button class="tab" label="memory" onclick={change_tab.clone()}>{"Memory"}</button>

                    if *active_tab == TabState::Datapath {
                        <button onclick={toggle_zoom}>{"Toggle Zoom"}</button>
                    }
    //                 if *active_tab == TabState::Memory {
    //                     <button>{"Dec"}</button>
    //                     <button>{"Bin"}</button>
    //                     <button>{"Hex"}</button>
    //                 }
                </div>
            </>
        }
}
