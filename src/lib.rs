//! This is a small crate to test out different ways of rendering required
//! features in rustdoc.

pub mod a;

#[cfg(feature = "foo")]
pub mod foo;

#[cfg(feature = "bar")]
mod bar;

#[cfg(feature = "clone")]
mod clone;

#[cfg(all(feature = "foo", feature = "bar"))]
pub mod foobar;
