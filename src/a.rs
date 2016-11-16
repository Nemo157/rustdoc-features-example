//! A public module that is always included in the crate.

/// A public struct that is always included in the crate.
#[cfg_attr(feature = "copy", derive(Copy))]
pub struct A {
    /// A public field that is always included in the crate.
    pub a: u8,

    #[cfg(feature = "foo")]
    /// A public field that is only included in the crate with feature `foo`.
    pub foo: u8,

    #[cfg(all(feature = "foo", feature = "bar"))]
    /// A public field that is only included in the crate with features `foo` and `bar`.
    pub foobar: u8,
}

/// A public function that is always included in the crate.
pub fn a() {
}

#[cfg(feature = "foo")]
/// A public function that is only included in the crate with feature `foo`.
pub fn foo() {
}

#[cfg(all(feature = "foo", feature = "bar"))]
/// A public function that is only included in the crate with features `foo` and `bar`.
pub fn foobar() {
}

/// A public trait that is always included in the crate.
pub trait ATrait {
    #[cfg(feature = "foo")]
    /// A trait method that is only included in the crate with feature `foo`.
    fn foo(&self) {
    }

    #[cfg(all(feature = "foo", feature = "bar"))]
    /// A trait method that is only included in the crate with features `foo` and `bar`.
    fn foobar(&self) {
    }
}

#[cfg(feature = "foo")]
/// A public trait that is only included in the crate with feature `foo`.
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

#[cfg(all(feature = "foo", feature = "bar"))]
/// A public trait that is only included in the crate with features `foo` and `bar`.
pub trait FooBarTrait {
    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}

/// Some impls (from `a`) that are always included in the crate.
impl A {
    /// A public method that is always included in the crate.
    pub fn a(&self) {
    }

    #[cfg(feature = "foo")]
    /// A public method that is only included in the crate with feature `foo`.
    pub fn foo(&self) {
    }

    #[cfg(all(feature = "foo", feature = "bar"))]
    /// A public method that is only included in the crate with features `foo` and `bar`.
    pub fn foobar(&self) {
    }
}

/// A trait impl that is always included in the crate.
impl ATrait for A {
    #[cfg(feature = "foo")]
    /// A trait method impl that is only included in the crate with feature `foo`.
    fn foo(&self) {
    }

    #[cfg(all(feature = "foo", feature = "bar"))]
    /// A trait method impl that is only included in the crate with features `foo` and `bar`.
    fn foobar(&self) {
    }
}

#[cfg(feature = "foo")]
/// A trait impl that is only included in the crate with feature `foo`.
impl FooTrait for A {
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

#[cfg(all(feature = "foo", feature = "bar"))]
/// A trait impl that is only included in the crate with features `foo` and `bar`.
impl FooBarTrait for A {
    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foo(&self) {
    }

    /// A trait method impl that is always included in the crate.
    /// (if the parent trait is)
    fn foobar(&self) {
    }
}

