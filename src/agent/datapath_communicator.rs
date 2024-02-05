use crate::agent::messages::Command;
use crate::agent::EmulationCoreAgent;
use crate::emulation_core::architectures::AvailableDatapaths;
use crate::emulation_core::datapath::VisualDatapath;
use futures::stream::{SplitSink, SplitStream};
use futures::FutureExt;
use futures::SinkExt;
use futures::StreamExt;
use gloo_console::log;
use gloo_console::warn;
use std::cell::RefCell;
use std::collections::HashMap;
use yew::UseForceUpdateHandle;
use yew_agent::reactor::ReactorBridge;

/// This struct provides an abstraction over all communication with the worker thread. Any commands to the worker
/// thread should be sent by calling a function on this struct.
///
/// The DatapathCommunicator will also handle receiving information about the state of the emulation core and maintain
/// internal state that can be displayed by the UI.
pub struct DatapathCommunicator {
    writer: RefCell<SplitSink<ReactorBridge<EmulationCoreAgent>, Command>>,
    reader: RefCell<SplitStream<ReactorBridge<EmulationCoreAgent>>>,
}

// Check references for equality by memory address.
impl PartialEq for &DatapathCommunicator {
    fn eq(&self, other: &Self) -> bool {
        let self_ptr: *const DatapathCommunicator = *self;
        let other_ptr: *const DatapathCommunicator = *other;
        self_ptr == other_ptr
    }
}

impl DatapathCommunicator {
    // General operational functions

    /// Initialize the DatapathCommunicator using a bridge.
    pub fn new(bridge: ReactorBridge<EmulationCoreAgent>) -> DatapathCommunicator {
        let (write, read) = bridge.split();
        DatapathCommunicator {
            writer: RefCell::new(write),
            reader: RefCell::new(read),
        }
    }

    /// Listen for updates from the worker thread and update internal state accordingly. This function should be called
    /// from the main app component. After updating internal state, the component this was called from will be force
    /// updated.
    #[allow(clippy::await_holding_refcell_ref)]
    pub async fn listen_for_updates(&self, update_handle: UseForceUpdateHandle) {
        let mut reader = match self.reader.try_borrow_mut() {
            Ok(reader) => reader,
            Err(_) => {
                warn!("Warning: Attempted to listen for updates multiple times");
                return;
            }
        };

        loop {
            log!("Waiting...");
            let update = reader.next().await;
            log!(format!("Got update {:?}", update));
            if update.is_none() {
                return;
            }
            update_handle.force_update();
        }
    }

    /// Sends a test message to the worker thread.
    fn send_message(&self, command: Command) {
        let mut writer = self.writer.borrow_mut();
        writer
            .send(command)
            // The logic for sending a message is synchronous but the API for writing to a SplitSink is asynchronous,
            // so we attempt to resolve the future immediately so we can expose a synchronous API for sending commands.
            // If the future doesn't return immediately, there's serious logic changes that need to happen so we just
            // log an error message and panic.
            .now_or_never()
            .expect("Send function did not immediately return, async logic needed.")
            .expect("Sending test message error")
    }

    // Wrapper functions for commands

    /// Sets the current emulation core to the provided architecture.
    pub fn set_core(&self, _architecture: AvailableDatapaths) {
        todo!()
    }

    /// Loads the parsed/assembled instructions provided into the current emulator core.
    pub fn load_instructions(&self, _instructions: &[u8]) {
        todo!()
    }

    /// Sets the execution speed of the emulator core to the provided speed in hz. If set to zero, the emulator core
    /// will execute as fast as possible.
    pub fn set_execute_speed(&self, _speed: u32) {
        todo!()
    }

    /// Sets the register with the provided name to the provided value.
    pub fn set_register(&self, _register: &str, _data: &str) {
        todo!()
    }

    /// Copies the contents of `data` to the emulator core's memory at `ptr`. Copies until either the end of `data` or
    /// the end of the emulaot core's memory.
    pub fn set_memory(&self, ptr: usize, data: Vec<u8>) {
        self.send_message(Command::SetMemory(ptr, data));
    }

    /// Executes the emulator core at the current set speed.
    pub fn execute(&self) {
        self.send_message(Command::Execute);
    }

    /// Executes a single instruction on the emulator core and pauses.
    pub fn execute_instruction(&self) {
        todo!()
    }

    /// Executes a single stage on the emulator core and pauses.
    pub fn execute_stage(&self) {
        todo!()
    }

    /// Pauses the core. Does nothing if the emulator core is already paused.
    pub fn pause_core(&self) {}

    // Getters for internal state

    /// Returns a list of all the registers on the current emulator core.
    pub fn get_registers(&self) -> HashMap<String, String> {
        todo!()
    }

    /// Returns the emulator core's memory as an array of bytes.
    pub fn get_memory(&self) -> Vec<u8> {
        todo!()
    }

    /// Gets the current stage of the emulator core as a string.
    pub fn get_current_stage(&self) -> String {
        todo!()
    }

    /// Gets the currently executing instruction on the emulator core. This is generally based on the value of the
    /// program counter.
    pub fn get_current_instruction(&self) -> usize {
        todo!()
    }

    /// Returns the appropriate visual datapath for the current architecture. Returns a boxed generic VisualDatapath.
    pub fn get_visual_datapath(
        &self,
        _architecture: AvailableDatapaths,
    ) -> Box<dyn VisualDatapath> {
        todo!()
    }

    pub fn get_accepting_input(&self) -> bool {
        todo!()
    }
}
