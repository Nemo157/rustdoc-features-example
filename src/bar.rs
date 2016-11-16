//! A private module that is only included in the crate with feature `foo`.

use a::A;

/// Some impls (from `bar`) that are always included in the crate.
/// (if the parent module is)
impl A {
    /// A public method that is always included in the crate.
    /// (if the parent module is)
    pub fn bar(&self) {
    }

    #[cfg(feature = "foo")]
    /// A public method that is only included in the crate with feature `foo`.
    /// (if the parent module is)
    pub fn foobar(&self) {
    }
}
