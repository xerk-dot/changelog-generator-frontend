

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-26T15:37:14Z
This release includes improvements in type handling for methods and enhancements to error handling within the `NewType` structure.
### Added
- Introduced a new field `error_kind` in the `Error` struct to track error types more effectively. ([View Commit](https://github.com/facebook/pyre-check/commit/146e40d4f38692d8d0175f23bc4214909a743b1b))
- Enhanced functionality to locate function definitions marked with the `@overload` decorator. ([View Commit](https://github.com/facebook/pyre-check/commit/6c060db118d98e7415fb327082833143fecdf155))
### Changed
- Updated logic to simplify argument validation within the `NewType` processing. ([View Commit](https://github.com/facebook/pyre-check/commit/72c54a50236e6b3b95e373ada66ada436999d5ed))
- Adjusted type inference handling for `classmethod` and `staticmethod` to improve the inferred `self` parameter behavior. ([View Commit](https://github.com/facebook/pyre-check/commit/553f961d169d1fb0a8568f44503d70373fe6fddb))
### Fixed
- Fixed errors related to unhandled cases in `ClassField` logic by decomposing tests to clearly document bugs. ([View Commit](https://github.com/facebook/pyre-check/commit/2da63356d8614cd32bc6b3e1840025c407dbcc2e))
- Resolved issues in the analysis where parameterized calls failed due to missing bindings. ([View Commit](https://github.com/facebook/pyre-check/commit/389985b572bbb99c0818b0600e71d54955840497))

## 2025-02-26T14:10:31Z
Enhancements include revisions on method visibility and improvements in debugging error types associated with `*args` behavior.
### Changed
- Reduced visibility of certain methods in the `AnswersSolver`. ([View Commit](https://github.com/facebook/pyre-check/commit/72127cb0bf31120ac9607b051b7764bf73340364))
- Improved handling of unpacked `*args` in callable subtyping functionality. ([View Commit](https://github.com/facebook/pyre-check/commit/b90d97d69e016c58fbfdf4ce858a553a8d94681b))
### Added
- Introduced new tests to validate proper behavior for `classmethod` and `staticmethod` first parameters. ([View Commit](https://github.com/facebook/pyre-check/commit/f555a607ba1fb8f497068bb335863d29cf781178))
- Added failing tests to showcase the expected changes in method parameter typing. ([View Commit](https://github.com/facebook/pyre-check/commit/dabanabacanandae))
### Fixed
- Resolved issues in how parameters are bound using `Var` types within the new function parameter management. ([View Commit](https://github.com/facebook/pyre-check/commit/bc3f9bd08b0778d788890d36a4ba6812c912354e))
- Enhanced clarity in error messaging related to the incorrect type assertions in method tests. ([View Commit](https://github.com/facebook/pyre-check/commit/553f961d169d1fb0a8568f44503d70373fe6fddb))
        