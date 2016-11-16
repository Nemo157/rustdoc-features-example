//! A public module that is only included in the crate with features `foo` and `bar`.

/// A public struct that is always included in the crate.
/// (if the parent module is)
pub struct FooBar {
    /// A public field that is always included in the crate.
    /// (if the parent module is)
    pub foobar: u8,
}

/// A public function that is always included in the crate.
/// (if the parent module is)
pub fn foobar() {
}

/// A public trait that is always included in the crate.
/// (if the parent module is)
pub trait FooBarTrait {
    /// A trait method that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}

impl FooBar {
    /// A public method that is always included in the crate.
    /// (if the parent module is)
    pub fn foobar(&self) {
    }
}

/// A trait impl that is always included in the crate.
/// (if the parent module is)
impl FooBarTrait for FooBar {
    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}
