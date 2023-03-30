(function() {var implementors = {
"bincode":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"bincode/enum.ErrorKind.html\" title=\"enum bincode::ErrorKind\">ErrorKind</a>"]],
"futures_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.SendError.html\" title=\"struct futures_channel::mpsc::SendError\">SendError</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TrySendError.html\" title=\"struct futures_channel::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TryRecvError.html\" title=\"struct futures_channel::mpsc::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Canceled.html\" title=\"struct futures_channel::oneshot::Canceled\">Canceled</a>"]],
"futures_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_task/struct.SpawnError.html\" title=\"struct futures_task::SpawnError\">SpawnError</a>"]],
"futures_util":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>, Item&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ReuniteError.html\" title=\"struct futures_util::stream::ReuniteError\">ReuniteError</a>&lt;T, Item&gt;"],["impl&lt;T, E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryChunksError.html\" title=\"struct futures_util::stream::TryChunksError\">TryChunksError</a>&lt;T, E&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReuniteError.html\" title=\"struct futures_util::io::ReuniteError\">ReuniteError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/future/struct.Aborted.html\" title=\"struct futures_util::future::Aborted\">Aborted</a>"]],
"gloo_file":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gloo_file/enum.FileReadError.html\" title=\"enum gloo_file::FileReadError\">FileReadError</a>"]],
"gloo_history":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gloo_history/enum.HistoryError.html\" title=\"enum gloo_history::HistoryError\">HistoryError</a>"]],
"gloo_net":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gloo_net/enum.Error.html\" title=\"enum gloo_net::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gloo_net/websocket/enum.WebSocketError.html\" title=\"enum gloo_net::websocket::WebSocketError\">WebSocketError</a>"]],
"gloo_storage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"gloo_storage/errors/enum.StorageError.html\" title=\"enum gloo_storage::errors::StorageError\">StorageError</a>"]],
"gloo_utils":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"gloo_utils/errors/struct.NotJsError.html\" title=\"struct gloo_utils::errors::NotJsError\">NotJsError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"gloo_utils/errors/struct.JsError.html\" title=\"struct gloo_utils::errors::JsError\">JsError</a>"]],
"pinned":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"pinned/mpsc/struct.TryRecvError.html\" title=\"struct pinned::mpsc::TryRecvError\">TryRecvError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"pinned/mpsc/struct.SendError.html\" title=\"struct pinned::mpsc::SendError\">SendError</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"pinned/mpsc/struct.TrySendError.html\" title=\"struct pinned::mpsc::TrySendError\">TrySendError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"pinned/oneshot/struct.RecvError.html\" title=\"struct pinned::oneshot::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"pinned/struct.TryLockError.html\" title=\"struct pinned::TryLockError\">TryLockError</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"serde":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>"]],
"serde_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/struct.Error.html\" title=\"struct serde_json::Error\">Error</a>"]],
"serde_urlencoded":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"serde_urlencoded/ser/enum.Error.html\" title=\"enum serde_urlencoded::ser::Error\">Error</a>"]],
"serde_wasm_bindgen":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_wasm_bindgen/struct.Error.html\" title=\"struct serde_wasm_bindgen::Error\">Error</a>"]],
"strum":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"strum/enum.ParseError.html\" title=\"enum strum::ParseError\">ParseError</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TryCurrentError.html\" title=\"struct tokio::runtime::TryCurrentError\">TryCurrentError</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/broadcast/error/struct.SendError.html\" title=\"struct tokio::sync::broadcast::error::SendError\">SendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.RecvError.html\" title=\"enum tokio::sync::broadcast::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.TryRecvError.html\" title=\"enum tokio::sync::broadcast::error::TryRecvError\">TryRecvError</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TryRecvError.html\" title=\"enum tokio::sync::mpsc::error::TryRecvError\">TryRecvError</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.SendTimeoutError.html\" title=\"enum tokio::sync::mpsc::error::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.TryLockError.html\" title=\"struct tokio::sync::TryLockError\">TryLockError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio::sync::oneshot::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/oneshot/error/enum.TryRecvError.html\" title=\"enum tokio::sync::oneshot::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.AcquireError.html\" title=\"struct tokio::sync::AcquireError\">AcquireError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.TryAcquireError.html\" title=\"enum tokio::sync::TryAcquireError\">TryAcquireError</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.SetError.html\" title=\"enum tokio::sync::SetError\">SetError</a>&lt;T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.SendError.html\" title=\"struct tokio::sync::watch::error::SendError\">SendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.RecvError.html\" title=\"struct tokio::sync::watch::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Error.html\" title=\"struct tokio::time::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Elapsed.html\" title=\"struct tokio::time::error::Elapsed\">Elapsed</a>"]],
"tokio_stream":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_stream/struct.Elapsed.html\" title=\"struct tokio_stream::Elapsed\">Elapsed</a>"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.SetGlobalDefaultError.html\" title=\"struct tracing_core::dispatcher::SetGlobalDefaultError\">SetGlobalDefaultError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelError.html\" title=\"struct tracing_core::metadata::ParseLevelError\">ParseLevelError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelFilterError.html\" title=\"struct tracing_core::metadata::ParseLevelFilterError\">ParseLevelFilterError</a>"]],
"yew":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"yew/html/enum.RenderError.html\" title=\"enum yew::html::RenderError\">RenderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"yew/suspense/struct.Suspension.html\" title=\"struct yew::suspense::Suspension\">Suspension</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()