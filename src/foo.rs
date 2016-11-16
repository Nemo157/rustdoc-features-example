//! A public module that is only included in the crate with feature `foo`.

/// A public struct that is always included in the crate.
/// (if the parent module is)
pub struct Foo {
    /// A public field that is always included in the crate.
    /// (if the parent module is)
    pub foo: u8,

    #[cfg(feature = "bar")]
    /// A public field that is only included in the crate with feature `bar`.
    /// (if the parent module is)
    pub foobar: u8,
}

/// A public function that is always included in the crate.
/// (if the parent module is)
pub fn foo() {
}

#[cfg(feature = "bar")]
/// A public function that is only included in the crate with feature `bar`.
/// (if the parent module is)
pub fn foobar() {
}

/// A public trait that is always included in the crate.
/// (if the parent module is)
pub trait FooTrait {
    /// A trait method that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    #[cfg(feature = "bar")]
    /// A trait method that is only included in the crate with feature `bar`.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}


#[cfg(feature = "bar")]
/// A public trait that is only included in the crate with feature `bar`.
/// (if the parent module is)
pub trait FooBarTrait {
    /// A trait method that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    /// A trait method that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}

impl Foo {
    /// A public method that is always included in the crate.
    /// (if the parent module is)
    pub fn foo(&self) {
    }

    #[cfg(feature = "bar")]
    /// A public method that is only included in the crate with feature `bar`.
    /// (if the parent module is)
    pub fn foobar(&self) {
    }
}

/// A trait impl that is always included in the crate.
/// (if the parent module is)
impl FooTrait for Foo {
    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    #[cfg(feature = "bar")]
    /// A trait method impl that is only included in the crate with feature `bar`.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}

#[cfg(feature = "bar")]
/// A trait impl that is only included in the crate with feature `bar`.
/// (if the parent module is)
impl FooBarTrait for Foo {
    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}
